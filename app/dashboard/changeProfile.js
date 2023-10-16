import { useState } from "react"
import { OptionDropdown, Option } from "app/admin/view/optionDropdown";
import { Type512Input } from "@components/type512Input";
import { checkCorrectType, formatType } from "@lib/getTypeData";
import { editUser } from "@lib/user";
import { useRouter } from "next/navigation";

const parseProfile = (profile) => {
    const newProf = {...profile}
    if (!['He/Him', 'She/Her', 'They/Them'].includes(newProf.pronouns) && newProf.pronouns != '') {
        newProf.pronouns = 'Other';
    }
    if (!['Self Typed', 'Triangulated', 'Officially Typed'].includes(newProf.opsTyping) && newProf.opsTyping != '') {
        newProf.opsTyping = 'Other';
    }
    return newProf;
}

export default function ChangeProfile({ profile, setChangeProfile }) {
    const router = useRouter();
    const [editedProfile, setEditedProfile] = useState(parseProfile(profile));
    const [otherPronouns, setOtherPronouns] = useState(!['He/Him', 'She/Her', 'They/Them'].includes(profile.pronouns) && profile.pronouns != '' ? profile.pronouns : '');
    const [otherProcess, setOtherProcess] = useState(!['Self Typed', 'Triangulated', 'Officially Typed'].includes(profile.opsTyping) && profile.opsTyping != '' ? profile.opsTyping : '');
    const [error, setError] = useState('');

    const saveChanges = async () => {

        if (editedProfile.pronouns === 'Other' && otherPronouns === '') {
            setError('Other pronoun is required if selected');
            return;
        }

        if (editedProfile.opsTyping === 'Other' && otherProcess === '') {
            setError('Other typing process is required if selected');
            return;
        }

        const pronouns = editedProfile.pronouns === 'Other' ? otherPronouns : editedProfile.pronouns;
        const process = editedProfile.opsTyping === 'Other' ? otherProcess : editedProfile.opsTyping;

        const formattedType = formatType(editedProfile.opsType);
        const [modalities, functions, animals] = formattedType.split(' ');;
        const [function1, function2] = functions.split('/');

        const nextError = checkCorrectType({
            modalities, animals, function1, function2
        });

        if (nextError) {
            setError(nextError);
            return;
        }

        setError('');

        const profileDict = {
            pronouns: pronouns,
            opsTyping: process,
            opsType: editedProfile.opsType,
            description: editedProfile.description
        };

        await editUser(profileDict);
        setChangeProfile(false);
        router.refresh();
        
    }

    return (
        <div className="dashboard__edit_profile">
            <div>Edit Profile</div>
            {error != '' && <div className='register_error'>{error}</div>}
            <div className="register_inputs">
                <OptionDropdown name="Pronouns:" defaultValue={editedProfile.pronouns} setChoice={(val) => setEditedProfile(prev => ({...prev, pronouns: val}))}>
                    <Option>He/Him</Option>
                    <Option>She/Her</Option>
                    <Option>They/Them</Option>
                    <Option>Other</Option>
                </OptionDropdown>
                { (!['He/Him', 'She/Her', 'They/Them'].includes(editedProfile.pronouns) && editedProfile.pronouns != '') && (
                    <div>
                        <label className="register_label">Other Pronouns:</label>
                        <input type="text" value={otherPronouns} onChange={(e) => setOtherPronouns(e.target.value)} />
                    </div>
                ) }
                <div>
                    <Type512Input label='Type:' Type512={editedProfile.opsType || ''} setType512={(val) => setEditedProfile(prev => ({...prev, opsType: val}))} />
                </div>
                <OptionDropdown name="Typing Process:" defaultValue={editedProfile.opsTyping} setChoice={(val) => setEditedProfile(prev => ({...prev, opsTyping: val}))}>
                    <Option>Self Typed</Option>
                    <Option>Triangulated</Option>
                    <Option>Officially Typed</Option>
                    <Option>Other</Option>
                </OptionDropdown>
                { (!['Self Typed', 'Triangulated', 'Officially Typed'].includes(editedProfile.opsTyping) && editedProfile.opsTyping != '') && (
                    <div>
                        <label className="register_label">Other Typing Process:</label>
                        <input type="text" value={otherProcess} onChange={(e) => setOtherProcess(e.target.value)} />
                    </div>
                ) }
                <div>
                    <label className="register_label">Bio:</label>
                    <textarea name='description' maxLength={400} value={editedProfile.description} onChange={(e) => setEditedProfile(prev => ({...prev, description: e.target.value}))} placeholder="Tell us about yourself" />
                </div>
            </div>
            <div className="dashboard__edit-btns">
                <div className="dashboard_banner-btn dashboard_banner-btn__gold" onClick={saveChanges}>
                    <img src="/img/main/save.png" />
                    Save
                </div>
                <div className="dashboard_banner-btn" onClick={() => setChangeProfile(false)}>
                    <img src="/img/main/cross.png" />
                    Cancel
                </div>
            </div>
        </div>
    )
}