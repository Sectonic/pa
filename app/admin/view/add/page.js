"use client";

import { useRef, useState } from "react";
import { OptionDropdown, Option } from "../optionDropdown";
import { Type512Input } from "@components/type512Input";
import { addType } from "@lib/admin";
import { useRouter } from "next/navigation";
import { getSimilar } from "@lib/admin";

export default function Page() {
    const [links, setLinks] = useState([]);
    const [similar, setSimilar] = useState([]);
    const [imageB64, setImageB64] = useState(null);
    const [Type512, setType512] = useState({modalities: '', function1: '', function2: '', saviorAnimals: '', animal3: '', animal4: ''});
    const [error, setError] = useState('');
    const router = useRouter();
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

        var fileId, image;
        if (imageB64 && process.env.NEXT_PUBLIC_PRODUCTION === 'true') {
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
        }

        const data = {
            name: e.target.name.value,
            type: getFullType(),
            fileId, image,
            social: e.target.social.value != '--' ? e.target.social.value : null,
            tag: e.target.tag.value != '--' ? e.target.tag.value : null,
            sex: e.target.sex.value != '--' ? e.target.sex.value : null,
            links: links
        };

        const valid = await addType(data);
        if (valid) {
            router.push('/admin/view');
        } else {
            setError('A person with the exact type already exists');
        }

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

    const checkSimilar = async () => {
        const duplicates = await getSimilar(name.current.value[0], getFullType());
        setSimilar(duplicates);
    }

    return (
        <div className="typeform_container" onPaste={pasteHandler}>
            <form className="typeform" onSubmit={typeHandler}>
                <h1>New Entry</h1>
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
                        <input type="text" required name='name' ref={name} />
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
                        <Type512Input Type512={Type512} setType512={setType512} />
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
                    <button type="submit" className="typeform_submit">Create Entry</button>
                    <div className="typeform_btn typeform_duplicates-btn" onClick={checkSimilar}>
                        <img src="/img/admin/duplicate.png" />
                        <div>Check Duplicates</div>
                    </div>
                </div>
            </form>
            <div className="typeform_duplicates">
                <h3>Duplicates</h3>
                {similar.map((person, i) => (
                    <div className="typeform_duplicates-list" key={i}>
                        <div className="duplicate_container">
                            <img src={person.image} />
                            <div>{person.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}