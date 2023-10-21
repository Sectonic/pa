"use client";

import Link from "next/link";
import OutsideClickHandler from 'react-outside-click-handler';
import {useState, useRef, Children, cloneElement, useEffect} from 'react';
import "animate.css";
import { getSession } from "@lib/session";

export function IconContainer({children, viewedPages}) {
    const children_arr = Children.toArray(children);
    if (Children.count(children) > 1) {
        return (
            <div className='seconds' >
                {children_arr.map(child => cloneElement(child, { viewedPages }))}
            </div>
        )
    }
    return (
        <>
            {children_arr.map(child => cloneElement(child, { viewedPages }))}
        </>
    )
}

export function Icon({comingSoon, img, name, children, direction, href, viewedPages}) {
    const [clicked, setClicked] = useState(false);
    const dropdownBG = useRef(null);
    const dropdownContainer = useRef(null);

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
                        <div className='page_icon-dropdown__bg' ref={dropdownBG}>
                            <OutsideClickHandler onOutsideClick={dropdownHide}>
                                <div className={`page_icon-dropdown page_icon-dropdown__${direction} animate__animated`} ref={dropdownContainer}>
                                    {Children.toArray(children).map(child => cloneElement(child, { viewedPages }))}
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

export function IconDropdown({ children, title, viewedPages }) {
    return (
        <>
            <div className='icon-dropdown_title'>{title}</div>
            <div className='icon-dropdown_links'>
                {Children.map(children, child => {
                    const viewed = viewedPages.map(page => page.url).includes(child.props.link);
                    return cloneElement(child, { viewed });
                })}
                <div className='icon-dropdown_bar__transparent'>A</div>
                <div className='icon-dropdown_bar__transparent'>A</div>
                <div className='icon-dropdown_bar__transparent'>A</div>
            </div>
        </>
    )
}

export function DropdownItem({ label, src, link, title, viewed }) {
    const session = getSession();
    return (
        <Link href={link}>
            <div className='icon-dropdown_bar'>
                <div className={`icon-dropdown_${label ? 'link' : 'img'}`}>
                    {label ? <div>{label}</div> : <img src={`/img/${src}.png`} />}
                </div>
                <div className='icon-bar_title'>
                    {title}
                </div>
                { session && (
                    <div className={`icon-bar_viewed ${viewed ? '' : 'icon-bar_viewed-red'}`}>
                        <div></div>
                    </div>
                )}
            </div>
        </Link>
    );
}

export const TreeSection = ({ children, title, viewedPages }) => {
    const children_arr = Children.toArray(children);

    return (
        <div id={title}>
            <div className='section_top'>
                {title}
            </div>
            {children_arr.map(child => cloneElement(child, { viewedPages }))}
        </div>
    )
}

export const LearnTree = ({ children, setSelected, setSticky, viewedPages }) => {
    const tree = useRef(null);
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
                {children_arr.map(child => cloneElement(child, { viewedPages }))}
            </div>
        </div>
    )
}

export const LearnButton = ({children, title, selected, selections }) => {
    const className = selected ? 'section_button-selected' : 'section_button'

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
        <li className={className} id={title + '-btn'} onClick={scrollToSelect}>
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

export const LearnButtons = ({ children, selected, sticky, selections }) => {
    const stickyClass = sticky ? 'section_buttons section_buttons-sticky' : 'section_buttons';
    const [styleSheet, setStyleSheet] = useState({ right: 'inherit' });

    useEffect(() => {
        const handleResize = () => {
          const currentWidth = window.innerWidth;
    
          if (currentWidth >= 1800) {
            const widthDifference = currentWidth - 1800;
            const widthToAdd = Math.round(widthDifference / 2);
            setStyleSheet({ right: widthToAdd + 3 });
          } else {
            setStyleSheet({ right: 'inherit' });
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <ul className={stickyClass} style={styleSheet}>
            {Children.map(children, (child, i) => {
                if (child.props.title == selected) {
                    return cloneElement(child, {selected: true, selections:selections })
                } else {
                    return cloneElement(child, {selected: false, selections:selections })
                }
            })}
        </ul>
    )
}

export const LearnLayout = ({ children, viewedPages }) => {
    const [selected, setSelected] = useState("");
    const [sticky, setSticky] = useState(false);

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
            {cloneElement(children_arr[0], {setSelected: setSelected, setSticky: setSticky, viewedPages })}
            {cloneElement(children_arr[1], {selected: selected, sticky: sticky, selections: selections})}
        </div>
    )

}