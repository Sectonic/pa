"use client";

import { useRef, useState, useEffect } from "react";
import { OptionDropdown, Option } from "../../optionDropdown";
import { Type512Input } from "@components/type512Input";
import { updateType, deleteType, getOnlyLink } from "@lib/admin";
import { checkCorrectType, formatType } from "@lib/getTypeData";
import LinkConnect from "app/admin/linkConnect";
import { getYoutubeVideoId } from "@lib/youtube";
import { url } from "@components/config";

export default function Edit({ type }) {
    const typeData = type.typeData;
    const [addLink, setAddLink] = useState(false);
    const [addLinkValue, setAddLinkValue] = useState({ name: '', url: '', channel: false, linkId: '', edit: false });
    const [connectedLinks, setConnectedLinks] = useState(type.links.filter(link => link._count.people > 1));
    const [notConnectedLinks, setNotConnectedLinks] = useState(type.links.filter(link => link._count.people <= 1));
    const [tag, setTag] = useState(type.tag);
    const [imageB64, setImageB64] = useState(type.image);
    const [Type512, setType512] = useState(typeData.type);
    const [error, setError] = useState('');
    const submitBtn = useRef(null);
    const name = useRef(null);

    const typeHandler = async (e) => {
        e.preventDefault();

        if (submitBtn.current.innerHTML === 'Updating...') {
            return;
        }

        submitBtn.current.innerHTML = 'Updating...';
        
        const formattedType = formatType(Type512);
        setType512(formattedType);
        const [modalities, functions, animals] = formattedType.split(' ');;
        const [function1, function2] = functions.split('/');

        const nextError = checkCorrectType({
            modalities, animals, function1, function2
        });

        if (nextError) {
            setError(nextError)
            submitBtn.current.innerHTML = 'Update Entry';
            return;
        }

        if (tag === 'Community Member') {
            for (let i = 0; i < notConnectedLinks.length; i++) {
                const link = notConnectedLinks[i];
                const correctVideoLink = getYoutubeVideoId(link.url);
    
                if (!link.channel && !correctVideoLink) {
                    setError(`"${link.name}" is not a valid youtube video link`);
                    submitBtn.current.innerHTML = 'Update Entry';
                    return;
                }
    
                if (link.channel && !link.linkId) {
                    setError(`Channel link is not found for "${link.name}"`);
                    submitBtn.current.innerHTML = 'Update Entry';
                    return;
                }
            }
        }

        const verifiedLinks = notConnectedLinks.map(link => {
            const { _count, edit, id, ...restOfLink } = link;
            return { ...restOfLink, linkId: link.channel ? link.linkId : getYoutubeVideoId(link.url) }
        });

        setError('');

        const data = {
            name: e.target.name.value,
            type: formattedType,
            social: e.target.social.value != '--' ? e.target.social.value : null,
            tag: e.target.tag.value != '--' ? e.target.tag.value : null,
            sex: e.target.sex.value != '--' ? e.target.sex.value : null,
            connectedLinks: connectedLinks,
            notConnectedLinks: verifiedLinks,
            disconnectIdLinks: type.links.filter(link => link._count.people > 1)
                               .map(link => ({ id: link.id, peopleIds: link.peopleIds }))
                               .filter(x => !connectedLinks.map(link => link.id).includes(x.id)),
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

    const handleNewLink = () => {
        setNotConnectedLinks(prev => [...prev, addLinkValue]);
        setAddLinkValue({ name: '', url: '', channel: false, linkId: '', edit: false });
        setAddLink(false);
    }

    const deleteLink = (index) => {
        let temp = [...notConnectedLinks];
        temp.splice(index, 1);
        setNotConnectedLinks(temp);
    }

    const setEditLink = (index) => {
        let temp = [...notConnectedLinks];
        temp[index] = {...temp[index], edit: true};
        setNotConnectedLinks(temp);
    }

    const saveEditLink = (index) => {
        let temp = [...notConnectedLinks];
        temp[index] = {...temp[index], edit: false};
        setNotConnectedLinks(temp);
    }

    const editLink = (index, key, value) => {
        let temp = [...notConnectedLinks];
        temp[index] = {...temp[index], [key]: value };
        if (key === 'channel') {
            temp[index].linkId = '';
        }
        setNotConnectedLinks(temp);
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

    const changeLinkChannel = (e) => {
        if (e.target.checked) {
            setAddLinkValue(prev => ({ ...prev, channel: true }))
        } else {
            setAddLinkValue(prev => ({...prev, channel: false, linkId: '' }))
        }
    }

    const openLinkEdit = (linkId) => {
        const editLink = window.open(`/admin/links/edit/${linkId}`, "_blank");
        editLink?.postMessage("message", url);
    }

    useEffect(() => {
        const refreshConnectedLinks = async (e) => {
            if (typeof e?.data === 'string' && e?.data.includes('refresh')) {
                const linkId = e?.data.split('|')[1];
                const action = e?.data.split('|')[2];
                if (action === 'delete') {
                    setConnectedLinks(prev => prev.filter(link => link.id !== Number(linkId)));
                } else {
                    const updatedLink = await getOnlyLink(linkId);
                    setConnectedLinks((prev) =>
                        prev.map((link) => (link.id === Number(linkId) ? updatedLink : link))
                    );
                }
            }
        };
        window.addEventListener('message', refreshConnectedLinks);
        return () => window.removeEventListener('message', refreshConnectedLinks);
    }, []);

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
                    <OptionDropdown name='Tag' defaultValue={type.tag} setChoice={setTag}>
                        <Option>--</Option>
                        <Option>Community Member</Option>
                        <Option>Class Typing</Option>
                        <Option>Mentioned</Option>
                    </OptionDropdown>
                </div>
                <h3>Type Selection</h3>
                <div className="register_inputs">
                    <div>
                        <Type512Input Type512={Type512} setType512={setType512} />
                    </div>
                    <OptionDropdown name='Social' defaultValue={typeData.social}>
                        <Option>--</Option>
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                        <Option>4</Option>
                    </OptionDropdown>
                </div>
                <h3>Links</h3>
                <div className="typeform_link-display">
                    {connectedLinks.map((link, i) => (
                        <div key={i}>
                            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{link.name}<br/><span style={{ color: 'rgba(255,255,255,.7)', fontSize: 12 }}>{link.url}</span></div>
                            <a className="typeform_link-display__edit" onClick={() => openLinkEdit(link.id)} ><img src="/img/main/edit.png" /></a>
                        </div>
                    ))}
                    {notConnectedLinks.map((link, i) => (
                        <>
                            {!link.edit ? (
                                <div key={i}>
                                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{link.name}<br/><span style={{ color: 'rgba(255,255,255,.7)', fontSize: 12 }}>{link.url}</span></div>
                                    <div className="typeform_link-display__edit" >
                                        <img src="/img/main/edit.png" onClick={() => setEditLink(i)} />
                                        <img src="/img/main/delete.png" className="delete_button" onClick={() => deleteLink(i)} />
                                    </div>
                                </div>
                            ) : (
                                <div className="register_inputs" style={{gap: 10}} key={i}>
                                    <div className="link_input" style={{width: '100%'}}>
                                        <div className="link_input-entry">
                                            <label className="register_label">Name</label>
                                            <input type="text" required value={link.name} onChange={(e) => editLink(i, 'name', e.target.value)} />
                                        </div>
                                        <div className="link_input-entry">
                                            <label className="register_label">Url</label>
                                            <input type="text" required value={link.url} onChange={(e) => editLink(i, 'url', e.target.value)} />
                                        </div>
                                        <div className="link_input-delete" onClick={() => saveEditLink(i)}>
                                            <div>
                                                <img src="/img/main/save.png" />
                                            </div>
                                        </div>
                                    </div>
                                    { tag === 'Community Member' && (
                                        <div className="link_input" style={{width: '100%'}}>
                                            <div className="link_input-entry" style={{flexBasis: '10%'}}>
                                                <label className="register_label">Channel</label>
                                                <div className="checkbox-wrapper-3" style={{marginTop: 10, margin: '10px auto'}}>
                                                    <input type="checkbox" id="cbx-3" checked={link.channel} onChange={(e) => editLink(i, 'channel', e.target.checked)} />
                                                    <label htmlFor="cbx-3" className="toggle"><span></span></label>
                                                </div>
                                            </div>
                                            <div className="link_input-entry" style={{flexBasis: '86%'}}>
                                                <label className="register_label">Channel Image Link {!link.channel && '(Disabled)'}</label>
                                                <input style={!link.channel ? ({ border: 'none', backgroundColor: '#050e27' }) : ({})} type="text" disabled={!link.channel} value={link.channel ? link.linkId : ''} onChange={(e) => editLink(i, 'linkId', e.target.value)} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </>
                    ))}
                </div>
                <div style={{fontSize: 13, fontWeight: 400}}>Connected Links:</div>
                <LinkConnect links={connectedLinks} setLinks={setConnectedLinks} />
                <div className="register_inputs" style={{gap: 10}}>
                    {addLink && (
                        <>
                            <div className="link_input">
                                <div className="link_input-entry">
                                    <label className="register_label">Name</label>
                                    <input type="text" required value={addLinkValue.name} onChange={(e) => setAddLinkValue(prev => ({...prev, name: e.target.value}))} />
                                </div>
                                <div className="link_input-entry">
                                    <label className="register_label">Url</label>
                                    <input type="text" required value={addLinkValue.url} onChange={(e) => setAddLinkValue(prev => ({...prev, url: e.target.value}))} />
                                </div>
                                <div className="link_input-delete" onClick={handleNewLink}>
                                    <div>
                                        <img src="/img/main/save.png" />
                                    </div>
                                </div>
                            </div>
                            { tag === 'Community Member' && (
                                <div className="link_input">
                                    <div className="link_input-entry" style={{flexBasis: '10%'}}>
                                        <label className="register_label">Channel</label>
                                        <div className="checkbox-wrapper-3" style={{marginTop: 10, margin: '10px auto'}}>
                                            <input type="checkbox" id="cbx-3" checked={addLinkValue.channel} onChange={changeLinkChannel} />
                                            <label htmlFor="cbx-3" className="toggle"><span></span></label>
                                        </div>
                                    </div>
                                    <div className="link_input-entry" style={{flexBasis: '86%'}}>
                                        <label className="register_label">Channel Image Link {!addLinkValue.channel && '(Disabled)'}</label>
                                        <input style={!addLinkValue.channel ? ({ border: 'none', backgroundColor: '#050e27' }) : ({})} type="text" disabled={!addLinkValue.channel} value={addLinkValue.linkId} onChange={(e) => setAddLinkValue(prev => ({...prev, linkId: e.target.value}))} />
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    <div>
                        <div className={`${addLink ? 'delete_button' : ''} typeform_btn`} onClick={() => setAddLink(prev => !prev)}>
                            <img src={addLink ? "/img/main/delete.png" : "/img/admin/link.png"} />
                            <div>{addLink ? 'Cancel' : 'Add'} New Link</div>
                        </div>
                    </div>
                </div>
                <div className="typeform_submit-container">
                    <button type="submit" className="typeform_submit" ref={submitBtn}>Update Entry</button>
                    <div className="typeform_btn typeform_delete-btn" onClick={deleteHandler}>
                        <img src="/img/main/delete.png" />
                        <div>Delete Entry</div>
                    </div>
                </div>
            </form>
        </div>
    )
}