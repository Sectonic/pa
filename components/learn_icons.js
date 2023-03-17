import { Children } from 'react';
import Link from "next/link";
import OutsideClickHandler from 'react-outside-click-handler';
import {useState} from 'react';
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

    const dropdownShow = () => {
        setClicked(true);
    }

    const dropdownHide = () => {
        setClicked(false);
    }

    return (
        <div className='icon_container link_text'>
            <div>
                <div className='page_icon'>
                    <img src={`/img/learn/home/${img}.png`} onClick={dropdownShow} />
                    {clicked && (
                        <OutsideClickHandler onOutsideClick={dropdownHide}>
                            {children}
                        </OutsideClickHandler>
                    )}
                </div>
            </div>
            <div className='icon_text' >{name}</div>
        </div>
    )
}

export function IconDropdown({ children, title }) {
    return (
        <div className='page_icon-dropdown animate__animated animate__zoomIn'>
            <div className='icon-dropdown_title'>{title}</div>
            <div className='icon-dropdown_links'>
                {children}
            </div>
        </div>
    )
}

export function DropdownItem({ name, src, link }) {
    if (name) {
        return (
            <Link href={`/learn/${link}`}>
                <div className='icon-dropdown_link'>
                    <div>{name}</div>
                </div>
            </Link>
        )
    } else {
        return (
            <Link href={`/learn/${link}`} className='icon-dropdown_img'>
                <img src={`/img/${src}.png`} />
            </Link>
        )
    }
}