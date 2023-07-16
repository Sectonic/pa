"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Children, cloneElement, useEffect } from "react"
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export const Option = ({ selectValue, children }) => {
    return <option onClick={() => selectValue(Children.toArray(children)[0])}>{children}</option>
}

export const OptionDropdown = ({ name, children, defaultValue, changeParams, desc }) => {

    const router = useRouter();
    const params = useSearchParams();
    const [value, setValue] = useState(defaultValue || '--');
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        setValue(params.get(name));
    }, [params.get(name)])

    const selectValue = (val) => {
        if (changeParams) {
            const newParams = new URLSearchParams(params);
            newParams.set(name, val);
            router.push('/apps/typechart?' + newParams + "#" + name);
        } else {
            setValue(val);
        }
        setDropdown(false)
    }

    return (
        <div className="option_container">
            <label className="register_label">{desc ? desc : name}</label>
            <input type="text" readOnly name={name.toLowerCase()} value={value} onClick={() => setDropdown(true)} />
            {dropdown && (
                <OutsideClickHandler onOutsideClick={() => {
                    if (dropdown) {
                        setDropdown(false);
                    }
                }}>
                    <div className="animate__animated animate__fadeIn option-dropdown">
                        {Children.map(children, child => (
                            cloneElement(child, {selectValue: selectValue})
                        ))}
                    </div>
                </OutsideClickHandler>
            )}
        </div>
    )
}