"use client";

import { useRef, useState } from "react";
import { OptionDropdown, Option } from "./optionDropdown";

export default function Page() {
    const [links, setLinks] = useState([]);
    const [imageB64, setImageB64] = useState(null);
    const [Type512, setType512] = useState({modalities: '', function1: '', function2: '', saviorAnimals: '', animal3: '', animal4: ''})
    const modalities = useRef(null);
    const function1 = useRef(null);
    const function2 = useRef(null);
    const saviorAnimals = useRef(null);
    const animal3 = useRef(null);
    const animal4 = useRef(null);

    const typeHandler = (e) => {
        e.preventDefault();
    }

    const addNewLink = () => {
        setLinks(prev => [...prev, {
            name: '', url: ''
        }]);
    }

    const changeLink = (index, type, value) => {
        let temp = [...links];
        temp[index][type] = value;
        setLinks(temp);
    }

    const deleteLink = (index) => {
        let temp = [...links];
        temp.splice(index, 1);
        setLinks(temp);
    }

    const changeImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageB64(reader.result)
        }
    }

    const pasteHandler = (e) => {
        const clipboardData = e.clipboardData || window.clipboardData;
        const items = clipboardData.items;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.type.indexOf('image') !== -1) {
                const file = item.getAsFile();
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    setImageB64(reader.result);
                };
            }
        }
    }

    const Type512Handler = (e) => {

        const uppercaseVoidCatcher = (val) => {
            if (val === 'x') {
                return 'x';
            } else {
                return val.toUpperCase();
            }
        }

        const capitalizeHandler = (type, val) => {
            if (type.startsWith('function')) {
                return `${val.substring(0,1).toUpperCase()}${val.substring(1).toLowerCase()}`;
            }  else {
                return `${uppercaseVoidCatcher(val.substring(0,1))}${uppercaseVoidCatcher(val.substring(1))}`;
            } 
        }

        const changeType = (name, value) => {
            let temp = {...Type512};
            temp[name] = capitalizeHandler(name, value);
            setType512(temp);
        }

        const inputArr = [modalities, function1, function2, saviorAnimals, animal3, animal4];
        const maxLength = ['animal3', 'animal4'].includes(e.target.name) ? 1 : 2;

        if (e.target.value.length > maxLength) {
            const nextInput = inputArr[Number(e.target.id) + 1];
            if (e.target.id != 5) {
                changeType(nextInput.current.name, e.target.value.substring(maxLength, maxLength + 1));
                nextInput.current.focus();
            }
        } else if (e.target.value === '') {
            const lastInput = inputArr[Number(e.target.id) - 1];
            changeType(e.target.name, '');
            if (Number(e.target.id) !== 0) {
                lastInput.current.focus();
            }
        } else {
            changeType(e.target.name, e.target.value);
        }

    }

    const Type512Focusing = () => {
        const typeLength = Object.values(Type512).join('').length;
        const inputArr = [modalities, function1, function2, saviorAnimals, animal3, animal4];
        let inputIndex;
        if (typeLength >= 9) {
            inputIndex = 5;
        } else if (typeLength >= 8) {
            inputIndex = 4;
        } else if (typeLength >= 6) {
            inputIndex = 3;
        } else if (typeLength >= 4) {
            inputIndex = 2;
        } else if (typeLength >= 2) {
            inputIndex = 1;
        } else {
            inputIndex = 0;
        }
        const focusingInput = inputArr[inputIndex];
        focusingInput.current.focus();
    }

    return (
        <div className="typeform_container" onPaste={pasteHandler}>
            <form className="typeform" onSubmit={typeHandler}>
                <h1>New Entry</h1>
                <div className="typeform_image">
                    <div className="typeform_image-display">
                        {imageB64 ? (
                            <img src={imageB64} />
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className="typeform_image-input">
                        <label htmlFor="file-upload" className="typeform_btn">
                            <img src="/img/admin/upload.png" />
                            <div>Upload Image (or paste)</div>
                        </label>
                        <input type="file" name="image" id="file-upload" onChange={changeImage} />
                    </div>
                </div>
                <div className="register_inputs">
                    <div>
                        <label className="register_label">Name</label>
                        <input type="text" required name='name' />
                    </div>
                    <OptionDropdown name='Sex'>
                        <Option>--</Option>
                        <Option>Male</Option>
                        <Option>Female</Option>
                    </OptionDropdown>
                    <OptionDropdown name='Tag'>
                        <Option>--</Option>
                        <Option>Community Member</Option>
                        <Option>Class Typing</Option>
                        <Option>Speculation</Option>
                    </OptionDropdown>
                </div>
                <h3>Type Selection</h3>
                <div className="register_inputs">
                    <div>
                        <div className="functions_input">
                            <div className="functions_input-section">
                                <input type="text" name="modalities" className="functions_input-long" 
                                ref={modalities} id={0} onChange={Type512Handler} value={Type512.modalities} onClick={Type512Focusing} />
                            </div>
                            <div className="functions_input-section">
                                <input type="text" name="function1" className="functions_input-medium" 
                                ref={function1} id={1} onChange={Type512Handler} value={Type512.function1} onClick={Type512Focusing} />
                                <div>/</div>
                                <input type="text" name="function2" className="functions_input-medium" 
                                ref={function2} id={2} onChange={Type512Handler} value={Type512.function2} onClick={Type512Focusing} />
                            </div>
                            <div className="functions_input-section">
                                <input type="text" name="saviorAnimals" className="functions_input-medium" 
                                ref={saviorAnimals} id={3} onChange={Type512Handler} value={Type512.saviorAnimals} onClick={Type512Focusing} />
                                <div>/</div>
                                <input type="text" name="animal3" className="functions_input-short" 
                                ref={animal3} id={4} onChange={Type512Handler} value={Type512.animal3} onClick={Type512Focusing} />
                                <div>{'('}</div>
                                <input type="text" name="animal4" className="functions_input-short" 
                                ref={animal4} id={5} onChange={Type512Handler} value={Type512.animal4} onClick={Type512Focusing} />
                                <div>{')'}</div>
                            </div>
                        </div>
                    </div>
                    <OptionDropdown name='Social'>
                        <Option>--</Option>
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                        <Option>4</Option>
                    </OptionDropdown>
                </div>
                <h3>Links</h3>
                <div className="register_inputs">
                    {links.map((link, i) => (
                        <div className="link_input">
                            <div className="link_input-entry">
                                <label className="register_label">Name</label>
                                <input type="text" required name='name' value={link.name} onChange={(e) => changeLink(i, 'name', e.target.value)} />
                            </div>
                            <div className="link_input-entry">
                                <label className="register_label">Url</label>
                                <input type="text" required name='name' value={link.url} onChange={(e) => changeLink(i, 'url', e.target.value)} />
                            </div>
                            <div className="link_input-delete">
                                <div className="delete_button" onClick={() => deleteLink(i)}>
                                    <img src="/img/main/delete.png" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div>
                        <div className="typeform_btn" onClick={addNewLink}>
                            <img src="/img/admin/link.png" />
                            <div>Add Link</div>
                        </div>
                    </div>
                </div>
                <div className="typeform_submit-container">
                    <button type="submit" className="typeform_submit">Create Entry</button>
                    <div className="typeform_btn typeform_duplicates-btn">
                        <img src="/img/admin/duplicate.png" />
                        <div>Check Duplicates</div>
                    </div>
                </div>
            </form>
            <div className="typeform_duplicates">
                <h3>Duplicates</h3>
                <div className="typeform_duplicates-list">
                    <div className="duplicate_container">
                        <img src="https://ik.imagekit.io/dnegvhe1j/types/905.png" />
                        <div>Dan Lok</div>
                    </div>
                </div>
            </div>
        </div>
    )
}