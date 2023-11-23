"use sclient";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { createQueryString } from "@lib/params";

export const Pagination = ({ currentPage, top, count, community }) => {
    const router = useRouter();
    const params = useSearchParams();

    const options = [1, count];
    var closest = options.reduce((prev, curr) => {
        var goal = currentPage || 1;
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });

    const updateData = (page) => {
        router.push('/apps/typesearch?' + createQueryString('page', page, params));
    }

    const PrevBtn = () => {
        if (currentPage === 1 || !currentPage) {
            return <div className='db_update-btn__edges db_update_btn__disabled'><span>&#8249;</span> <div className="edges_name">Prev</div></div>
        } else {
            return <div className='db_update-btn__edges' onClick={() => updateData(currentPage - 1)}><span>&#8249;</span> <div className="edges_name">Prev</div></div>
        }
    }

    const NextBtn = () => {
        if (currentPage === count) {
            return <div className='db_update-btn__edges db_update_btn__disabled'><div className="edges_name">Next</div> <span>&#8250;</span></div>
        } else {
            return <div className='db_update-btn__edges' onClick={() => updateData((currentPage || 1) + 1)}><div className="edges_name">Next</div> <span>&#8250;</span></div>
        }
    }

    const Selected = ({num}) => {
        const curr = currentPage || 1;
        if (curr && num === curr) {
            return <div className="db_update-btn db_update-btn__selected">{num}</div>
        } else if (num === 1 && curr === 1) {
            return <div className="db_update-btn db_update-btn__selected">1</div>
        } else {
            return <div className="db_update-btn" onClick={() => updateData(num)}>{num}</div>
        }
    }

    const ClosestChecker = () => {

        if (count < 2) {
            return <div></div>;
        }

        const curr = currentPage || 1;
        const nonMoving = curr === closest;

        if (closest === 1) {
            return (
                <>
                    { nonMoving ? (
                        <Selected num={2} />
                    ) : (
                        <Selected num={curr} />
                    )}
                    { count > 2 && (
                        <div className="db_update-btn db_update-btn-nohover">...</div>
                    )}
                </>
            )

        } else {

            return (
                <>
                    { count > 2 && (
                        <div className="db_update-btn db_update-btn-nohover">...</div>
                    )}
                    { nonMoving ? (
                        <>
                            { count > 2 ? (
                                <Selected num={count - 1} />
                            ) : (
                                <Selected num={2} />
                            )}
                        </>
                    ) : (
                        <Selected num={curr} />
                    )}
                </>
            )


        }
    }
    
    return (
        <div className={`db_update-container ${community ? 'db_update-container__community' : ''} ${top ? 'db_update-container__top' : ''}`}>
            <button className="db_update">
                <PrevBtn/>
                <Selected num={1} />
                <ClosestChecker />
                { count > 2 && <Selected num={count} />}
                <NextBtn/>
            </button>
        </div>
    )
}