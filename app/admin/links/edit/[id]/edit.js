"use client";

import { useRef, useState } from "react";
import { updateLink, deleteLink } from "@lib/admin";
import PeopleConnect from "../peopleConnect";
import { getYoutubeVideoId } from "@lib/youtube";
import { url } from '@components/config';

export default function EditLink({ link }) {
    const community = link.people.some(p => p.tag === 'Community Member')
    const [updatedLink, setUpdatedLink] = useState({ id: link.id, name: link.name, url: link.url, linkId: link.linkId, channel: link.channel });
    const [people, setPeople] = useState(link.people);
    const [error, setError] = useState('');
    const submitBtn = useRef(null);

    const typeHandler = async (e) => {
        e.preventDefault();

        if (submitBtn.current.innerHTML === 'Updating...') {
            return;
        }

        submitBtn.current.innerHTML = 'Updating...';

        if (community) {
            const correctVideoLink = getYoutubeVideoId(updatedLink.url);

            if (!updatedLink.channel && !correctVideoLink) {
                setError(`"${updatedLink.name}" is not a valid youtube video link`);
                submitBtn.current.innerHTML = 'Update Link';
                return;
            }

            if (updatedLink.channel && !updatedLink.linkId) {
                setError(`Channel link is not found for "${updatedLink.name}"`);
                submitBtn.current.innerHTML = 'Update Link';
                return;
            }
        }

        setError('');

        const data = {
            ...updatedLink,
            linkId: updatedLink.channel ? updatedLink.linkId : getYoutubeVideoId(updatedLink.url),
            people: people.map(person => ({ id: person.id }))
        };

        await updateLink(data);
        if (window.opener) {
            window.opener.postMessage(`refresh|${link.id}|update`, url);
            window.close();
        } else {
            window.location = `/admin/links?` + new URLSearchParams({ filter: community ? 'Community Only' : '' });
        }
    }

    const deleteHandler = async () => {
        await deleteLink(link.id);
        if (window.opener) {
            window.opener.postMessage(`refresh|${link.id}|delete`, url);
            window.close();
        } else {
            window.location = `/admin/links?` + new URLSearchParams({ filter: community ? 'Community Only' : '' });
        }
    }

    return (
        <div className="typeform_container">
            <form className="typeform" onSubmit={typeHandler}>
                <h1>Edit {link.id}</h1>
                {error !== '' && <div className='register_error'>{error}</div>}
                <div className="register_inputs" style={{gap: 10}} >
                    <div className="link_input" style={{width: '100%'}}>
                        <div className="link_input-entry" style={{flexBasis: '50%'}}>
                            <label className="register_label">Name</label>
                            <input type="text" required value={updatedLink.name} onChange={(e) => setUpdatedLink(prev => ({ ...prev, name: e.target.value }))} />
                        </div> 
                        <div className="link_input-entry" style={{flexBasis: '50%'}}>
                            <label className="register_label">Url</label>
                            <input type="text" required value={updatedLink.url} onChange={(e) => setUpdatedLink(prev => ({ ...prev, url: e.target.value }))} />
                        </div>
                    </div>
                    { community && (
                        <div className="link_input" style={{width: '100%'}}>
                            <div className="link_input-entry" style={{flexBasis: '10%'}}>
                                <label className="register_label">Channel</label>
                                <div className="checkbox-wrapper-3" style={{marginTop: 10, margin: '10px auto'}}>
                                    <input type="checkbox" id="cbx-3" checked={updatedLink.channel} onChange={(e) => setUpdatedLink(prev => ({ ...prev, channel: e.target.checked, linkId: '' }))} />
                                    <label htmlFor="cbx-3" className="toggle"><span></span></label>
                                </div>
                            </div>
                            <div className="link_input-entry" style={{flexBasis: '86%'}}>
                                <label className="register_label">Channel Image Link {!updatedLink.channel && '(Disabled)'}</label>
                                <input style={!updatedLink.channel ? ({ border: 'none', backgroundColor: '#050e27' }) : ({})} type="text" disabled={!updatedLink.channel} value={updatedLink.channel ? updatedLink.linkId : ''} onChange={(e) => setUpdatedLink(prev => ({ ...prev, linkId: e.target.value }))} />
                            </div>
                        </div>
                    )}
                </div>
                <div style={{fontSize: 13, fontWeight: 400, marginTop: community ? 0 : 10}}>Connected People:</div>
                <PeopleConnect people={people} setPeople={setPeople} />
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