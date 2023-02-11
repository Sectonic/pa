import Select from 'react-select';
import { Popup } from "../components/popup_main";
import Image from '../components/image';
import { useState, useEffect } from "react";
import Placeholder from '../components/placeholder';
import { useRouter } from 'next/router';
import { waitUntil, WAIT_FOREVER } from 'async-wait-until';

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};

const filter_exchange = {
    "MM": [
        {'name': 'sensoryModality', 'value': 'mS'},
        {'name': 'deModality', 'value': 'mDe'},
    ],
    "MF": [
        {'name': 'sensoryModality', 'value': 'mS'},
        {'name': 'deModality', 'value': 'fDe'},
    ],
    "FM": [
        {'name': 'sensoryModality', 'value': 'fS'},
        {'name': 'deModality', 'value': 'mDe'},
    ],
    "FF": [
        {'name': 'sensoryModality', 'value': 'fS'},
        {'name': 'deModality', 'value': 'fDe'},
    ],
    "Fi/Ni": [
        {'name': 'mbti', 'value': 'Jumper ISFP'}
    ],
    "Fi/Se": [
        {'name': 'mbti', 'value': 'Standard ISFP'}
    ],
    "Fi/Si": [
        {'name': 'mbti', 'value': 'Jumper INFP'}
    ],
    "Fi/Ne": [
        {'name': 'mbti', 'value': 'Standard INFP'}
    ],
    "Ti/Ni": [
        {'name': 'mbti', 'value': 'Jumper ISTP'}
    ],
    "Ti/Se": [
        {'name': 'mbti', 'value': 'Standard ISTP'}
    ],
    "Ti/Si": [
        {'name': 'mbti', 'value': 'Jumper INTP'}
    ],
    "Ti/Ne": [
        {'name': 'mbti', 'value': 'Standard INTP'}
    ],
    "Fe/Ni": [
        {'name': 'mbti', 'value': 'Standard ENFJ'}
    ],
    "Fe/Se": [
        {'name': 'mbti', 'value': 'Jumper ENFJ'}
    ],
    "Fe/Si": [
        {'name': 'mbti', 'value': 'Standard ESFJ'}
    ],
    "Fe/Ne": [
        {'name': 'mbti', 'value': 'Jumper ESFJ'}
    ],
    "Te/Ni": [
        {'name': 'mbti', 'value': 'Standard ENTJ'}
    ],
    "Te/Se": [
        {'name': 'mbti', 'value': 'Jumper ENTJ'}
    ],
    "Te/Si": [
        {'name': 'mbti', 'value': 'Standard ESTJ'}
    ],
    "Te/Ne": [
        {'name': 'mbti', 'value': 'Jumper ESTJ'}
    ],
    "Ni/Fi": [
        {'name': 'mbti', 'value': 'Jumper INTJ'}
    ],
    "Ni/Fe": [
        {'name': 'mbti', 'value': 'Standard INFJ'}
    ],
    "Ni/Ti": [
        {'name': 'mbti', 'value': 'Jumper INFJ'}
    ],
    "Ni/Te": [
        {'name': 'mbti', 'value': 'Standard INTJ'}
    ],
    "Si/Fi": [
        {'name': 'mbti', 'value': 'Jumper ISTJ'}
    ],
    "Si/Fe": [
        {'name': 'mbti', 'value': 'Standard ISFJ'}
    ],
    "Si/Ti": [
        {'name': 'mbti', 'value': 'Jumper ISFJ'}
    ],
    "Si/Te": [
        {'name': 'mbti', 'value': 'Standard ISTJ'}
    ],
    "Ne/Fi": [
        {'name': 'mbti', 'value': 'Standard ENFP'}
    ],
    "Ne/Fe": [
        {'name': 'mbti', 'value': 'Jumper ENTP'}
    ],
    "Ne/Ti": [
        {'name': 'mbti', 'value': 'Standard ENTP'}
    ],
    "Ne/Te": [
        {'name': 'mbti', 'value': 'Jumper ENFP'}
    ],
    "Se/Fi": [
        {'name': 'mbti', 'value': 'Standard ESFP'}
    ],
    "Se/Fe": [
        {'name': 'mbti', 'value': 'Jumper ESTP'}
    ],
    "Se/Ti": [
        {'name': 'mbti', 'value': 'Standard ESTP'}
    ],
    "Se/Te": [
        {'name': 'mbti', 'value': 'Jumper ESFP'}
    ],
    "SC/B(P)": [
        {'name': 'animal1', 'value': 'Sleep'},
        {'name': 'animal2', 'value': 'Consume'},
        {'name': 'animal3', 'value': 'Blast'},
        {'name': 'animal4', 'value': 'Play'},
    ],
    "SC/P(B)": [
        {'name': 'animal1', 'value': 'Sleep'},
        {'name': 'animal2', 'value': 'Consume'},
        {'name': 'animal3', 'value': 'Play'},
        {'name': 'animal4', 'value': 'Blast'},
    ],
    "SB/C(P)": [
        {'name': 'animal1', 'value': 'Sleep'},
        {'name': 'animal2', 'value': 'Blast'},
        {'name': 'animal3', 'value': 'Consume'},
        {'name': 'animal4', 'value': 'Play'},
    ],
    "SB/P(C)": [
        {'name': 'animal1', 'value': 'Sleep'},
        {'name': 'animal2', 'value': 'Blast'},
        {'name': 'animal3', 'value': 'Play'},
        {'name': 'animal4', 'value': 'Consume'},
    ],
    "CS/B(P)": [
        {'name': 'animal1', 'value': 'Consume'},
        {'name': 'animal2', 'value': 'Sleep'},
        {'name': 'animal3', 'value': 'Blast'},
        {'name': 'animal4', 'value': 'Play'},
    ],
    "CS/P(B)": [
        {'name': 'animal1', 'value': 'Consume'},
        {'name': 'animal2', 'value': 'Sleep'},
        {'name': 'animal3', 'value': 'Play'},
        {'name': 'animal4', 'value': 'Blast'},
    ],
    "CP/S(B)": [
        {'name': 'animal1', 'value': 'Consume'},
        {'name': 'animal2', 'value': 'Play'},
        {'name': 'animal3', 'value': 'Sleep'},
        {'name': 'animal4', 'value': 'Blast'},
    ],
    "CP/B(S)": [
        {'name': 'animal1', 'value': 'Consume'},
        {'name': 'animal2', 'value': 'Play'},
        {'name': 'animal3', 'value': 'Blast'},
        {'name': 'animal4', 'value': 'Sleep'},
    ],
    "BS/C(P)": [
        {'name': 'animal1', 'value': 'Blast'},
        {'name': 'animal2', 'value': 'Sleep'},
        {'name': 'animal3', 'value': 'Consume'},
        {'name': 'animal4', 'value': 'Play'},
    ],
    "BS/P(C)": [
        {'name': 'animal1', 'value': 'Blast'},
        {'name': 'animal2', 'value': 'Sleep'},
        {'name': 'animal3', 'value': 'Play'},
        {'name': 'animal4', 'value': 'Consume'},
    ],
    "BP/S(C)": [
        {'name': 'animal1', 'value': 'Blast'},
        {'name': 'animal2', 'value': 'Play'},
        {'name': 'animal3', 'value': 'Sleep'},
        {'name': 'animal4', 'value': 'Consume'},
    ],
    "BP/C(S)": [
        {'name': 'animal1', 'value': 'Blast'},
        {'name': 'animal2', 'value': 'Play'},
        {'name': 'animal3', 'value': 'Consume'},
        {'name': 'animal4', 'value': 'Sleep'},
    ],
    "PC/S(B)": [
        {'name': 'animal1', 'value': 'Play'},
        {'name': 'animal2', 'value': 'Consume'},
        {'name': 'animal3', 'value': 'Sleep'},
        {'name': 'animal4', 'value': 'Blast'},
    ],
    "PC/B(S)": [
        {'name': 'animal1', 'value': 'Play'},
        {'name': 'animal2', 'value': 'Consume'},
        {'name': 'animal3', 'value': 'Blast'},
        {'name': 'animal4', 'value': 'Sleep'},
    ],
    "PB/S(C)": [
        {'name': 'animal1', 'value': 'Play'},
        {'name': 'animal2', 'value': 'Blast'},
        {'name': 'animal3', 'value': 'Sleep'},
        {'name': 'animal4', 'value': 'Consume'},
    ],
    "PB/C(S)": [
        {'name': 'animal1', 'value': 'Play'},
        {'name': 'animal2', 'value': 'Blast'},
        {'name': 'animal3', 'value': 'Consume'},
        {'name': 'animal4', 'value': 'Sleep'},
    ],
}

const options = [
    { value: 'MM', label: 'MM'},
    { value: 'MF', label: 'MF'},
    { value: 'FM', label: 'FM'},
    { value: 'FF', label: 'FF'},
    { value: 'Fi/Ni', label: 'Fi/Ni'},
    { value: 'Fi/Se', label: 'Fi/Se'},
    { value: 'Fi/Si', label: 'Fi/Si'},
    { value: 'Fi/Ne', label: 'Fi/Ne'},
    { value: 'Ti/Ni', label: 'Ti/Ni'},
    { value: 'Ti/Se', label: 'Ti/Se'},
    { value: 'Ti/Si', label: 'Ti/Si'},
    { value: 'Ti/Ne', label: 'Ti/Ne'},
    { value: 'Fe/Ni', label: 'Fe/Ni'},
    { value: 'Fe/Se', label: 'Fe/Se'},
    { value: 'Fe/Si', label: 'Fe/Si'},
    { value: 'Fe/Ne', label: 'Fe/Ne'},
    { value: 'Te/Si', label: 'Te/Si'},
    { value: 'Te/Se', label: 'Te/Se'},
    { value: 'Te/Ni', label: 'Te/Ni'},
    { value: 'Te/Ne', label: 'Te/Ne'},
    { value: 'Ni/Fi', label: 'Ni/Fi'},
    { value: 'Ni/Fe', label: 'Ni/Fe'},
    { value: 'Ni/Ti', label: 'Ni/Ti'},
    { value: 'Ni/Te', label: 'Ni/Te'},
    { value: 'Si/Fi', label: 'Si/Fi'},
    { value: 'Si/Fe', label: 'Si/Fe'},
    { value: 'Si/Ti', label: 'Si/Ti'},
    { value: 'Si/Te', label: 'Si/Te'},
    { value: 'Ne/Fi', label: 'Ne/Fi'},
    { value: 'Ne/Fe', label: 'Ne/Fe'},
    { value: 'Ne/Ti', label: 'Ne/Ti'},
    { value: 'Ne/Te', label: 'Ne/Te'},
    { value: 'Se/Fi', label: 'Se/Fi'},
    { value: 'Se/Fe', label: 'Se/Fe'},
    { value: 'Se/Ti', label: 'Se/Ti'},
    { value: 'Se/Te', label: 'Se/Te'},
    { value: 'SC/B(P)', label: 'SC/B(P)'},
    { value: 'SC/P(B)', label: 'SC/P(B)'},
    { value: 'SB/C(P)', label: 'SB/C(P)'},
    { value: 'SB/P(C)', label: 'SB/P(C)'},
    { value: 'CS/B(P)', label: 'CS/B(P)'},
    { value: 'CS/P(B)', label: 'CS/P(B)'},
    { value: 'CP/S(B)', label: 'CP/S(B)'},
    { value: 'CP/B(S)', label: 'CP/B(S)'},
    { value: 'BS/C(P)', label: 'BS/C(P)'},
    { value: 'BS/C(P)', label: 'BS/C(P)'},
    { value: 'BS/P(C)', label: 'BS/P(C)'},
    { value: 'BP/S(C)', label: 'BP/S(C)'},
    { value: 'BP/C(S)', label: 'BP/C(S)'},
    { value: 'PC/S(B)', label: 'PC/S(B)'},
    { value: 'PC/B(S)', label: 'PC/B(S)'},
    { value: 'PB/S(C)', label: 'PB/S(C)'},
    { value: 'PB/C(S)', label: 'PB/C(S)'},
]

const filter_template = {
    "format": 'modified',
}

const API = process.env.NEXT_PUBLIC_API;

function Database({user}) {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [dataTrue, setDataTrue] = useState(false);
    const [lowBound, setLowBound] = useState(0);
    const [highBound, setHighBound] = useState(50);
    const [filters, setFilters] = useState(filter_template);
    const [popupShown, setPopup] = useState(false);
    const [popupData, setPopupData] = useState({});
    const [loading, setLoading] = useState(true);

    const handlePopup = (choice, type_data) => {
        document.body.style.overflowY = "auto";
        if (choice) {
        document.body.style.overflowY = "hidden";
        }
        setPopupData(type_data);
        setPopup(choice);
    };

    useEffect(() => {
        async function checkUser() {
            await waitUntil(() => user != null, {
                timeout: WAIT_FOREVER,
            });
            if (user.active) {
                setLoading(false);
                let url = `${API}/types/${lowBound}to${highBound}?`;
                fetch(url + new URLSearchParams(filters)).then(
                    res => {
                        if (res.ok) {
                            res.json().then(data => {
                                setData(data);
                                setDataTrue(true);
                                setLowBound(lowBound + 50);
                                setHighBound(highBound + 50);
                            })
                        }
                        else {
                            console.log('Initial Failed. Requesting Database again.');
                            setTimeout(() => {
                                let url = `${API}/types/${lowBound}to${highBound}?`;
                                fetch(url + new URLSearchParams(filters)).then(
                                    res => res.json()
                                ).then(
                                    data => {
                                        setData(data);
                                        setDataTrue(true);
                                        setLowBound(lowBound + 50);
                                        setHighBound(highBound + 50);
                                    }
                                )
                            }, 1000)
                        }
                    }
                )   
            } else {
                router.push('/login');
            }
        }
        checkUser();
    }, [user]);

    const updateData = () => {
        let url = `${API}/types/${lowBound}to${highBound}?`;
        fetch(url + new URLSearchParams(filters)).then(
            res => res.json()
        ).then(
            newdata => {
                setData(data.concat(newdata).unique());
                setLowBound(lowBound + 50);
                setHighBound(highBound + 50);
            }
        )
    }

    function updateFilters(new_filters) {
        let url = `${API}/types/0to50?`;
        fetch(url + new URLSearchParams(new_filters)).then(
            res => res.json()
        ).then(
            newdata => {
                setData(newdata);
                setLowBound(50);
                setHighBound(100);
            }
        )
    }

    const formatOptionLabel = ({label}) => (
        <div>
          <div style={{ display: "inline-block", backgroundColor: '#5c64f4', padding: '2px 5px', borderRadius: 20, fontSize: '17px' }}>{label}</div>
        </div>
    );

    const handleSelectChange = (selectedOptions) => {
        var clean_filters = {
            "format": 'created',
            "tags": [],
            "quadra": [],
            "sensoryModality": [],
            "deModality": [],
            "mbti": [],
            "sex": [],
            "temperment": [],
            "oD": [],
            "animal1": [],
            "animal2": [],
            "animal3": [],
            "animal4": [],
            "function1": [],
            "function2": [],
            "playModality": [],
            "blastModality": [],
            "consumeModality": [],
            "sleepModality": [],
            "observerAxis": [],
            "observerNeed": [],
            "observerLetter": [],
            "deciderAxis": [],
            "deciderNeed": [],
            "deciderLetter": [],
            "energyInfo": [],
        };
        selectedOptions.forEach(filter => {
            var all_filters = filter_exchange[filter['value']];
            all_filters.forEach(item => {
                let filter_col = clean_filters[item['name']];
                if (!filter_col.includes(item['value'])) {
                    clean_filters[item['name']].push(item['value']);
                }
            });
        });
        setFilters(clean_filters);
        updateFilters(clean_filters);
        var background = document.querySelector('.db_background');
        background.scrollTop = 0;
    }
      
    return (
        <div className="main">
            {loading ? (
                <Placeholder/>
            ) : (
                <>
                {popupShown && <Popup popup={handlePopup} type="type" data={popupData} />}
                <div className="db_background-exterior">
                <div className="db_background">
                    <div className="banner banner_blue banner_blue-outline banner-sm">
                        <div className="db_search">
                            <Select
                                styles={{
                                    input: (styles) => ({
                                        ...styles,
                                        color: 'white',
                                    }),
                                    control: styles => ({ 
                                        ...styles,
                                        backgroundColor: '#192030',
                                        border: 'none',
                                        outline: 'none', 
                                        borderRadius: '50px', 
                                        color: 'white', 
                                        minHeight: '50px', 
                                        cursor: 'text', 
                                        }),
                                    option: (styles) => ({
                                        ...styles,
                                        backgroundColor: '#192030',
                                        color: 'white',
                                        ':hover': {
                                            backgroundColor: '#262e47',
                                            color: 'white',
                                            cursor: 'pointer',
                                        },
                                    }),
                                    menu: (styles) => ({
                                        position: 'absolute',
                                        width: '100%',
                                        marginTop: 2,
                                        borderBottomLeftRadius: '20px',
                                        borderBottomRightRadius: '20px',
                                        backgroundColor: 'transparent',
                                        overflow : 'hidden'
                                    }),
                                    menuList: (provided) => ({
                                        ...provided,
                                        width: '95%',
                                        margin: '0 auto',
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        borderBottomLeftRadius: '20px',
                                        borderBottomRightRadius: '20px',
                                        backgroundColor: '#192030',
                                        borderTop: 'none',
                                        borderLeft: '3px solid #262e47',
                                        borderRight: '3px solid #262e47',
                                        borderBottom: '3px solid #262e47',
                                        zIndex: 10,
                                        "::-webkit-scrollbar": {
                                            width: "3px"
                                        },
                                        "::-webkit-scrollbar-thumb": {
                                            background: "#5c64f4"
                                        },
                                    }),
                                    multiValue: (styles) => {
                                        return {
                                        ...styles,
                                        borderRadius: 20,
                                        backgroundColor:'#5c64f4',
                                        };
                                    },
                                    multiValueLabel: (styles) => ({
                                    ...styles,
                                    backgroundColor: '#5c64f4',
                                    color: '#FFF',
                                    borderTopLeftRadius: 20,
                                    borderBottomLeftRadius: 20
                                    }),
                                    multiValueRemove: (styles) => ({
                                        ...styles,
                                        backgroundColor: '#5c64f4',
                                        borderTopRightRadius: 20,
                                        borderBottomRightRadius: 20,
                                        ':hover': {
                                        backgroundColor: 'white',
                                        color: '#5c64f4',
                                        cursor: 'pointer',
                                        },
                                    }),
                                }}
                                formatOptionLabel={formatOptionLabel}
                                isMulti
                                name="colors"
                                options={options}
                                classNamePrefix="select"
                                spellcheck="false"
                                onChange={handleSelectChange}
                            />
                        </div>
                    </div>
                    {dataTrue ? (
                        <div className="db_card-container">
                            {data.map((person, index) => {
                                return(
                                    <div key={person.id} className="db_card outline-gray db_card_hover" onClick={() => handlePopup(true, data[index])}>
                                        {
                                            person['image'] === null ? 
                                            <div className="db_card-img db_card-img-empty"><Image src="/pa/static/img/main/empty_img.png"/></div> :
                                            <div className="db_card-img"><Image src={person['image']} /></div> 
                                        }
                                        <div className="db_card-text">
                                            <div>
                                                <h3>{person['name']}</h3>
                                                <p className="db_card-type">{person['type']}</p>
                                                {person['tag'] != null ? <p className="db_card-text-purple">{person['tag']}</p> : null}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="db_update-btn-container" onClick={updateData}>
                                <button className="db_update-btn">
                                    Load More
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="db_card-container">
                        {[...Array(50)].map((index) =>
                            <div key={index} className="db_card outline-gray">
                                <div className="db_card-img db_card-img-empty load_wraper"><div className="activity"></div></div>
                                <div className="db_card-text">
                                    <div>
                                        <h3 className="db_card-type_placehold load_wraper"><div className="activity"></div></h3>
                                        <div className="db_card-type_placehold load_wraper"><div className="activity"></div></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    )
                    }
                </div>
            </div>
                </>
            )}
        </div>
    );
}

export default Database;