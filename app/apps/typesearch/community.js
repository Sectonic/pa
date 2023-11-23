"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { createQueryString } from "@lib/params";
import { Pagination } from "./pagination";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Link from "next/link";
import { CommunityLoading } from "./container";
import { useEffect, useState } from "react";

export default function Community({ data, count }) {
    const router = useRouter();
    const params = useSearchParams();
    const [masonryWidth, setMasonryWidth] = useState(null);

    const handlePopup = (person_id) => {
        router.push('/apps/typesearch?' + createQueryString('popup_id', String(person_id), params), { scroll: false });
    }

    const handleMasonryWidth = () => {
        if (window.innerWidth >= 1750) {
            setMasonryWidth(1580)
        } else if (window.innerWidth >= 1420) {
            setMasonryWidth(1260)
        } else if (window.innerWidth >= 1100) {
            setMasonryWidth(940)
        } else if (window.innerWidth >= 680) {
            setMasonryWidth(620)
        } else {
            setMasonryWidth(300)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleMasonryWidth);

        handleMasonryWidth();
    
        return () => {
          window.removeEventListener('resize', handleMasonryWidth);
        };
    }, [])

    const columnBreakPoints = { 679: 1, 680: 2, 1100: 3, 1420: 4, 1750: 5 };

    if (!masonryWidth) {
        return <CommunityLoading />
    }

    return (
        <>
            <Pagination community={true} currentPage={Number(params.get('page'))} top={true} count={count} />
            <ResponsiveMasonry
                columnsCountBreakPoints={columnBreakPoints}
            >
                <Masonry gutter="20px" style={{ justifyContent: 'center', marginTop: 25, width: masonryWidth, marginLeft: 'auto', marginRight: 'auto' }}>  
                    {data.map(person => {
                        const urls = person.urls.split('/*SEPARATOR/*');
                        const names = person.names.split('/*SEPARATOR/*');
                        const channels = person.channels.split('/*SEPARATOR/*');
                        const linkIds = person.linkIds.split('/*SEPARATOR/*');
                        const types = [...new Set(person.types.split('/*SEPARATOR/*'))];
                        const socials = person.socials ? [...new Set(person.socials.split('/*SEPARATOR/*'))] : [];

                        const links = [];
                        for (let i = 0; i < urls.length; i++) {
                            links.push({
                                url: urls[i],
                                channel: channels[i] === "1",
                                linkId: linkIds[i],
                                name: names[i],
                            })
                        }

                        const kendrickIndex = links.findIndex(link => link.name.includes('Interviewed by ENFP Male'));
                        const imageIndex = kendrickIndex !== -1
                        ? kendrickIndex
                        : links.findIndex(link => !link.channel) !== -1
                            ? links.findIndex(link => !link.channel)
                            : null;

                        const sortedSocials = socials
                        .filter(value => value !== null || value !== 'null')
                        .map(Number)
                        .sort((a, b) => a - b);

                        return (
                            <div id={person.id} key={person.id} className="db_card-community db_card">
                                {sortedSocials.length > 0 && (
                                <div className={`db_card-social db_card-social-community ${sortedSocials.length === 4 ? 'full' : ''}`}>
                                    {sortedSocials.map((social, i)=> <img src={`/img/icons/social/${social}.png`} key={i} alt="" />)}
                                </div>
                                )}
                                {
                                    person.image === null ? 
                                    <div className="db_card-img db_card-img-empty"><img src="/pa/static/img/main/empty_img.png"/></div> :
                                    <div className={`db_card-img ${imageIndex === null ? 'db_card-img_channel' : ''}`}><img src={imageIndex === null ? links[0].linkId : `https://img.youtube.com/vi/${links[imageIndex].linkId}/hqdefault.jpg`} alt="" /></div> 
                                }
                                <div className="db_card-text db_card-text-community">
                                    <div className='db_card-type-community'>
                                        {types.map((type, i) => <div key={i}>{type}</div>)}
                                    </div>
                                    <div className="db_card-community-links">
                                        {links.map((link, i) => (
                                            <Link className="db_card-text-purple" key={i} href={link.url} target="_blank"><img src="/img/typesearch/youtube.png" /> {link.name}</Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry>
            <Pagination community={true} currentPage={Number(params.get('page'))} count={count} />
        </>
    )
}