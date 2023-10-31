"use client";

import { Children, cloneElement } from "react"
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export const Option = ({ selectValue, children }) => {
    return <div onClick={() => selectValue(Children.toArray(children)[0])}>{children}</div>
}

export const OptionDropdown = ({ name, children, defaultValue, setChoice = null }) => {
    const [value, setValue] = useState(defaultValue || '--');
    const [dropdown, setDropdown] = useState(false);

    const selectValue = (val) => {
        setValue(val);
        setDropdown(false);
        if (setChoice) {
            setChoice(val);
        }
    }

    return (
        <div className="option_container">
            <label className="register_label">{name}</label>
            <input type="text" readOnly name={name.toLowerCase()} value={value} onClick={() => setDropdown(true)} />
            {dropdown && (
                <OutsideClickHandler onOutsideClick={() => {
                    if (dropdown) {
                        setDropdown(false);
                    }
                }}>
                    <div className="animate__animated animate__fadeIn option-dropdown">
                        <div>
                            {Children.map(children, child => (
                                cloneElement(child, {selectValue: selectValue})
                            ))}
                        </div>
                    </div>
                </OutsideClickHandler>
            )}
        </div>
    )
}