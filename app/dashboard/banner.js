"use client";

import { useState } from "react";
import ChangeProfile from "./changeProfile";

export default function DashboardBanner({ profile }) {

    const tags = [profile.pronouns, profile.opsType, profile.opsTyping];
    const [changeProfile, setChangeProfile] = useState(false);

    return (
        <div className="dashboard_banner">
            <div>
                <div className="dasboard_banner__container">
                    <div className="dashboard_banner-pfp-container">
                        <div className="dashboard_banner-pfp">
                            {profile.username[0].toUpperCase()}
                        </div>
                        <div>
                            {profile.username}
                        </div>
                    </div>
                    <div className="dashboard_banner-btn" onClick={() => setChangeProfile(true)}>
                        <img src="/img/main/edit.png" />
                        Edit Profile
                    </div>
                </div>
                { changeProfile ? (
                    <ChangeProfile profile={profile} setChangeProfile={setChangeProfile} />
                ) : (
                    <>
                        <div className="dashboard_banner__tags">
                            {(tags.every(tag => tag === null)) ? (
                                <div className="no_tag"><i>No Tags</i></div>
                            ) : (
                                tags.map((tag, i) => (
                                tag && <div key={i}>{tag}</div>
                                ))
                            )}
                        </div>
                        <div className={`dashboard-banner__description ${profile.description ? '' : 'dashboard-banner__description-none'}`}>
                            {profile.description ? <pre>{profile.description}</pre> : <i>No Description</i>}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}