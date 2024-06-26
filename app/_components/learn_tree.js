"use client";

import Link from "next/link";
import OutsideClickHandler from 'react-outside-click-handler';
import {useState, useRef, Children, cloneElement, useEffect} from 'react';
import "animate.css";
import { useRouter } from "next/navigation";

export function IconContainer({ children }) {
    if (Children.count(children) > 1) {
        return (
            <div className='seconds' >
                { children }
            </div>
        )
    }
    return (
        <>
            { children }
        </>
    )
}

export function Icon({comingSoon, img, name, children, direction, href }) {
    const [clicked, setClicked] = useState(false);
    const dropdownBG = useRef(null);
    const dropdownContainer = useRef(null);

    useEffect(() => {
        if (window.innerWidth <= 750) {
            if (clicked) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'visible';
            }
        }
    }, [clicked])

    if (comingSoon) {
        return <div className="icon_container link_text">
            <div>
                <div className="page_icon page_icon_soon">
                    <img src={`/img/learn/${img}.png`} />
                </div>
            </div>
            <div className='icon_text' >Coming Soon</div>
        </div>
    }

    const dropdownShow = () => {
        setClicked(true);
    }

    const dropdownHide = () => {
        if (window.innerWidth > 750) {
            setClicked(false);
        } else {
            dropdownBG.current.classList.add('animate__fadeOut');
            dropdownBG.current.style.setProperty('animation-delay', '.2s');
            dropdownContainer.current.classList.add('animate__slideOutDown');
            setTimeout(() => {
              setClicked(false);
            }, 450)
        }
    }

    const CheckHref = ({ children }) => {
        if (href) {
            return <Link href={href}>{children}</Link>
        } else {
            return <div>{children}</div>
        }
    }

    return (
        <div className='icon_container link_text'>
            <CheckHref>
                <div className='page_icon' onClick={dropdownShow}>
                    <img src={`/img/learn/${img}.png`} />
                    {clicked && (
                        <div className='page_icon-dropdown__bg animte__animated' ref={dropdownBG}>
                            <OutsideClickHandler onOutsideClick={dropdownHide}>
                                <div className={`page_icon-dropdown page_icon-dropdown__${direction} animate__animated `} ref={dropdownContainer}>
                                    { children }
                                </div>
                            </OutsideClickHandler>
                        </div>
                    )}
                </div>
            </CheckHref>
            <div className='icon_text' >{name}</div>
        </div>
    )
}

export function IconDropdown({ children, title }) {

    return (
        <>
            <div className='icon-dropdown_title'>{title}</div>
            <div className='icon-dropdown_links'>
                { children }
                <div className='icon-dropdown_bar__transparent'>A</div>
                <div className='icon-dropdown_bar__transparent'>A</div>
                <div className='icon-dropdown_bar__transparent'>A</div>
            </div>
        </>
    )
}

export function DropdownItem({ label, src, link, title }) {
    const router = useRouter();
    
    return (
        <div style={{cursor: 'pointer'}} onClick={() => {
            document.body.style.overflow = 'visible';
            router.push(link)
        }}>
            <div className='icon-dropdown_bar'>
                <div className={`icon-dropdown_${label ? 'link' : 'img'}`}>
                    {label ? <div>{label}</div> : <img src={`/img/${src}.png`} />}
                </div>
                <div className='icon-bar_title'>
                    {title}
                </div>
            </div>
        </div>
    );
}

export const TreeSection = ({ children, title }) => {

    return (
        <div id={title}>
            <div className='section_top'>
                {title}
            </div>
            { children }
        </div>
    )
}

export const LearnTree = ({ children, setSelected, setSticky, setTreeBottom }) => {
    const tree = useRef(null);

    useEffect(() => {
        setTreeBottom(tree.current.getBoundingClientRect().bottom + window.scrollY);
    }, [])

    const children_arr = Children.toArray(children);

    useEffect(() => {

        const scrollingHandler = () => {
            if (tree.current) {
                const top = tree.current.offsetTop + 315;
                const buttonsAbove = window.scrollY >= top;
    
                if (!buttonsAbove) {
                    setSticky(false);
                } else {
                    setSticky(true);
                }
    
                const scrollTop = document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight;
                const clientHeight = document.documentElement.clientHeight;
    
                const isAtTop = scrollTop === 0;
                const isAtBottom = scrollHeight - scrollTop === clientHeight;
    
                if (isAtTop) {
                    setSelected(children_arr[0].props.title);
                } else if (isAtBottom) {
                    setSelected(children_arr.at(-1).props.title);
                } else {
                    for (var i = 0; i < children_arr.length; i++) {
                        const child = document.getElementById(children_arr[i].props.title);
                        const rect = child.getBoundingClientRect();
                        const top = rect.top + scrollTop;
                        const bottom = top + rect.height;
                        const isIntersecting = top <= scrollTop + clientHeight / 2 && bottom >= scrollTop + clientHeight / 2;
        
                        if (isIntersecting) {
                            setSelected(child.id);
                            break;
                        }
                    }
                }
            }
        }

        window.addEventListener('scroll', scrollingHandler);
        return () => window.removeEventListener('scroll', scrollingHandler);
    }, [tree, children_arr, setSelected, setSticky]);

    return (
        <div className='learn_section'>
            <div className='section_map' ref={tree} >
                { children }
            </div>
        </div>
    )
}

export const LearnButton = ({children, title, selected, selections, index, stickyClass, setStickyClass }) => {
    const className = selected ? 'section_button-selected' : 'section_button';
    const btnRef = useRef(null);

    // useEffect(() => {
    //     if (index === 1) {
    //         if ((scrollY + 77 < btnRef.current.getBoundingClientRect().top + scrollY) && stickyClass === 'section_buttons section_button-bottom-sticky') {
    //             setStickyClass('section_buttons section_buttons-sticky')
    //         }
    //     }
    // }, [scrollY])

    const scrollToSelect = () => {
        if (selections.indexOf(title) === 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (selections.indexOf(title) === selections.length - 1) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        } else {
            var elDistanceToTop = window.scrollY + document.getElementById(title).getBoundingClientRect().top - 100;
            window.scrollTo({ top: elDistanceToTop, behavior: 'smooth' });
        }
    }

    return (
        <li className={className} id={title + '-btn'} onClick={scrollToSelect} ref={btnRef}>
            <div className="button-title-container">
            <div className="button_send">
                <img src={"/img/main/section_btn.png"} alt=""  />
            </div>
            <div className="button-title">{title}</div>
            </div>
            <div className="button_text">
            {children}
            </div>
        </li>
    )
}

export const LearnButtons = ({ children, selected, sticky, selections, treeBottom }) => {
    const [stickyClass, setStickyClass] = useState(sticky ? 'section_buttons section_buttons-sticky' : 'section_buttons');
    const [styleSheet, setStyleSheet] = useState({ right: 38 });
    const [btnsBottom, setBtnsBottom] = useState(null);
    const [scrollY, setScrollY] = useState(null);
    const learnBtnsRef = useRef(null);

    useEffect(() => {
        if (treeBottom) {
            if (btnsBottom > treeBottom) {
                setStickyClass('section_buttons section_button-bottom-sticky');
            } else {
                setStickyClass(sticky ? 'section_buttons section_buttons-sticky' : 'section_buttons')
            }
        }
    }, [sticky, btnsBottom]);

    useEffect(() => {
        if (treeBottom) {
            const btnsBottomCurrent = learnBtnsRef.current.getBoundingClientRect().bottom + scrollY - 58;
            console.log(btnsBottomCurrent, treeBottom);;
            setBtnsBottom(btnsBottomCurrent);
        }
    }, [scrollY]);

    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        const handleResize = () => {
          const currentWidth = window.innerWidth;
    
          if (currentWidth >= 1800) {
            const widthDifference = currentWidth - 1800;
            const widthToAdd = Math.round(widthDifference / 2);
            setStyleSheet({ right: widthToAdd + 3 });
          } else {
            setStyleSheet({ right: 38 });
          }
        };
    
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
    
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <ul className={stickyClass} style={styleSheet} ref={learnBtnsRef}>
            {Children.map(children, (child, i) => {
                return cloneElement(child, {selected: child.props.title == selected, selections, scrollY, index: i, stickyClass, setStickyClass })
            })}
        </ul>
    )
}

export const LearnLayout = ({ children }) => {
    const [selected, setSelected] = useState("");
    const [sticky, setSticky] = useState(false);
    const [treeBottom, setTreeBottom] = useState(null);

    const children_arr = Children.toArray(children);
    const overviewClass = sticky ? 'learn_overview learn_overview-sticky' : 'learn_overview';
    const selections = Children.map(children_arr[0].props.children, child => {
        return child.props.title;
    })

    useEffect(() => {
        const firstSectionId = selections[0] + '-btn';
        const firstSection = document.getElementById(firstSectionId);
        if (window.scrollY === 0) {
            firstSection.className = 'section_button-selected';
        } else {
            const firstSectionSelection = Children.toArray(children_arr[1].props.children)[0].props.selected;
            firstSection.className = firstSectionSelection ? 'section_button-selected' : 'section_button'
        }
    });

    return (
        <div className={overviewClass}>
            {cloneElement(children_arr[0], {setSelected: setSelected, setSticky: setSticky, setTreeBottom })}
            {cloneElement(children_arr[1], {selected: selected, sticky: sticky, selections: selections, treeBottom })}
        </div>
    )

}