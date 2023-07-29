
export const Examples = ({ data }) => (
    <>
        {data.map(person => {
            return(
                <div id={person.id} key={person.id} className="db_card outline-gray db_card_hover" 
                    // onClick={() => handlePopup(person.id)}
                >
                    {person.social && (
                    <div className='db_card-social'>
                            <img src={`/img/icons/social/${person.social}.png`} />
                    </div>
                    )}
                    {
                        person.image === null ? 
                        <div className="db_card-img db_card-img-empty"><img src="/pa/static/img/main/empty_img.png"/></div> :
                        <div className="db_card-img"><img src={person.image} /></div> 
                    }
                    <div className="db_card-text">
                        <div>
                            <h3>{person.name}</h3>
                            <p className="db_card-type">{person.type}</p>
                            {person.tag != null ? <p className="db_card-text-purple">{person.tag}</p> : null}
                        </div>
                    </div>
                </div>
            )
        })}
        <div className="db_card outline-gray db_card_hover">
            
        </div>
    </>
)