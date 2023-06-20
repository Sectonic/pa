"use client";

import { useRef, useState } from "react";
import { OptionDropdown, Option } from "../../optionDropdown";
import { Type512Input } from "../../type512Input";
import { updateType, deleteType } from "@lib/admin";

export default function Edit({ type }) {
    const [links, setLinks] = useState(type.links.map(link => {
        return {url: link.url, name: link.name};
    }));
    const [imageB64, setImageB64] = useState(type.image);

    const [Type512, setType512] = useState(
        {
            modalities: type.type.substring(0,2), 
            function1: type.type.substring(3,5), 
            function2: type.type.substring(6,8),
            saviorAnimals: type.type.substring(9, 11),
            animal3: type.type.substring(12, 13),
            animal4: type.type.substring(14, 15)
        }
    );
    const [error, setError] = useState('');
    const name = useRef(null);

    const getFullType = () => `${Type512.modalities} ${Type512.function1}/${Type512.function2} ${Type512.saviorAnimals}/${Type512.animal3}(${Type512.animal4})`;

    const acceptableTypes = {
        modalities: ['MM', 'MF', 'FM', 'FF', 'Mx', 'Fx', 'xM', 'xF', 'xx'],
        functions: ['Te', 'Fe', 'Fi', 'Ti', 'Ne', 'Se', 'Ni', 'Si', 'De', 'Di', 'Oe', 'Oi', 'Tx', 'Fx', 'Nx', 'Sx', 'Dx', 'Ox', 'xx'],
        animals: ['P', 'B', 'C', 'S', 'x']
    }

    const typeHandler = async (e) => {
        e.preventDefault();
        
        var partEmpty = false;
        Object.values(Type512).forEach(part => {
            if (part === '') {
                setError('Fill out entire 512 type in type selection');
                partEmpty = true;
            }
        })
        if (partEmpty) {
            return;
        }

        if (!acceptableTypes.modalities.includes(Type512.modalities)) {
            setError('Modality input is not acceptable');
            return;
        }
        if (!acceptableTypes.functions.includes(Type512.function1) || !acceptableTypes.functions.includes(Type512.function2)) {
            setError('Function input(s) are not acceptable');
            return;
        }
        const animalString = Type512.saviorAnimals + Type512.animal3 + Type512.animal4;
        for (var i = 0; i < animalString.length; i++) {
            const animalChr = animalString.charAt(i);
            if (!acceptableTypes.animals.includes(animalChr)) {
                setError('Animal input(s) are not acceptable');
                return;
            }
        }

        setError('');

        const data = {
            name: e.target.name.value,
            type: getFullType(),
            social: e.target.social.value != '--' ? e.target.social.value : null,
            tag: e.target.tag.value != '--' ? e.target.tag.value : null,
            sex: e.target.sex.value != '--' ? e.target.sex.value : null,
            links: links,
            id: type.id
        };

        if (imageB64 != null && process.env.NEXT_PUBLIC_PRODUCTION === 'true') {
            if (imageB64 != type.image) {
                if (type.fileId) {
                    const deleteOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            fileId: type.fileId
                        })
                    }
                    await fetch('/api/typesearch_delete', deleteOptions);
                }
                if (imageB64 === '') {
                    data.fileId = null;
                    data.image = null;
                } else {
                    const imageOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            imageName: e.target.name.value.split(' ').join('_').toLowerCase(),
                            imageBase64: imageB64.split('base64,')[1],
                        })
                    }
                    const imageReq = await fetch('/api/typesearch_add', imageOptions)
                    var { fileId, image } = await imageReq.json();
                    data.fileId = fileId;
                    data.image = image;
                }
            }
        }

        await updateType(data);
        window.location = '/admin/view';
    }

    const deleteHandler = async () => {
        const deleteOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fileId: type.fileId
            })
        }
        await fetch('/api/typesearch_delete', deleteOptions);
        await deleteType(type.id);
        window.location = '/admin/view';
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

    return (
        <div className="typeform_container" onPaste={pasteHandler}>
            <form className="typeform" onSubmit={typeHandler}>
                <h1>Edit {type.id}</h1>
                {error !== '' && <div className='register_error'>{error}</div>}
                <div className="typeform_image">
                    <div className="typeform_image-display">
                        {imageB64 ? (
                            <img src={imageB64} />
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className="typeform_image-input">
                        <div className="typeform_submit-container">
                            <label htmlFor="file-upload" className="typeform_btn typeform_addimage_btn">
                                <img src="/img/admin/upload.png" />
                                <div>Upload Image (or paste)</div>
                            </label>
                            <div className="typeform_btn typeform_delete-btn" onClick={() => setImageB64('')}>
                                <img src="/img/main/delete.png" />
                                <div>Remove Image</div>
                            </div>
                        </div>
                        <input type="file" name="image" id="file-upload" onChange={changeImage} />
                    </div>
                </div>
                <div className="register_inputs">
                    <div>
                        <label className="register_label">Name</label>
                        <input type="text" required name='name' ref={name} defaultValue={type.name} />
                    </div>
                    <OptionDropdown name='Sex' defaultValue={type.sex}>
                        <Option>--</Option>
                        <Option>Male</Option>
                        <Option>Female</Option>
                    </OptionDropdown>
                    <OptionDropdown name='Tag' defaultValue={type.tag}>
                        <Option>--</Option>
                        <Option>Community Member</Option>
                        <Option>Class Typing</Option>
                        <Option>Speculation</Option>
                    </OptionDropdown>
                </div>
                <h3>Type Selection</h3>
                <div className="register_inputs">
                    <div>
                        <Type512Input Type512={Type512} setType512={setType512} />
                    </div>
                    <OptionDropdown name='Social' defaultValue={type.social}>
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
                        <div className="link_input" key={i}>
                            <div className="link_input-entry">
                                <label className="register_label">Name</label>
                                <input type="text" required value={link.name} onChange={(e) => changeLink(i, 'name', e.target.value)} />
                            </div>
                            <div className="link_input-entry">
                                <label className="register_label">Url</label>
                                <input type="text" required value={link.url} onChange={(e) => changeLink(i, 'url', e.target.value)} />
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
                    <button type="submit" className="typeform_submit">Update Entry</button>
                    <div className="typeform_btn typeform_delete-btn" onClick={deleteHandler}>
                        <img src="/img/main/delete.png" />
                        <div>Delete Entry</div>
                    </div>
                </div>
            </form>
        </div>
    )
}