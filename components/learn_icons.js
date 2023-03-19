import { Children } from 'react';
import Link from "next/link";
import OutsideClickHandler from 'react-outside-click-handler';
import {useState, useRef} from 'react';
import "animate.css";

export function IconContainer({children}) {
    if (Children.count(children) > 1) {
        return (
            <div className='seconds' >
                {children}
            </div>
        )
    }
    return (
        <>
            {children}
        </>
    )
}

export function Icon({img, name, children}) {
    const [clicked, setClicked] = useState(false);
    const dropdownBG = useRef(null);
    const dropdownContainer = useRef(null);

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

    return (
        <div className='icon_container link_text'>
            <div>
                <div className='page_icon'>
                    <img src={`/img/learn/home/${img}.png`} onClick={dropdownShow} />
                    {clicked && (
                        <div className='page_icon-dropdown__bg' ref={dropdownBG}>
                            <OutsideClickHandler onOutsideClick={dropdownHide}>
                                <div className='page_icon-dropdown animate__animated' ref={dropdownContainer}>
                                    {children}
                                </div>
                            </OutsideClickHandler>
                        </div>
                    )}
                </div>
            </div>
            <div className='icon_text' >{name}</div>
        </div>
    )
}

export function IconDropdown({ children, title }) {
    return (
        <>
            <div className='icon-dropdown_title'>{title}</div>
            <div className='icon-dropdown_links'>
                {children}
                {
                    Children.count(children) < 5 && (
                        <>                        
                            <div className='icon-dropdown_bar__transparent'>A</div>
                            <div className='icon-dropdown_bar__transparent'>A</div>
                            <div className='icon-dropdown_bar__transparent'>A</div>
                            <div className='icon-dropdown_bar__transparent'>A</div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export function DropdownItem({ label, src, link, title }) {
    if (label) {
        return (
            <Link href={`/learn/${link}`}>
                <div className='icon-dropdown_bar'>
                    <div className='icon-dropdown_link'>
                        <div>{label}</div>
                    </div>
                    <div className='icon-bar_title'>
                        {title}
                    </div>
                </div>
            </Link>
        )
    } else {
        return (
            <Link href={`/learn/${link}`}>
                <div className='icon-dropdown_bar'>
                    <div className='icon-dropdown_img'>
                        <img src={`/img/${src}.png`} />
                    </div>
                    <div className='icon-bar_title'>
                        {title}
                    </div>
                </div>
            </Link>
        )
    }
}