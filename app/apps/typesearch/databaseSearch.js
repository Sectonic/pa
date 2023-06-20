"use client";

import Select from 'react-select';
import { useRouter, useSearchParams } from 'next/navigation';
import { createQueryString } from '@lib/params';
import { options } from './filters';

export default function DatabaseSearch({ filters }) {
    const router = useRouter();
    const params = useSearchParams();

    const handleSelectChange = (selectedOptions) => {
        var filters_array = [];
        selectedOptions.forEach(filter => {
            filters_array.push(filter['value']);
        });     
        const filter_string = filters_array.length === 0 ? '' : encodeURIComponent(JSON.stringify(filters_array));    
        router.push('/apps/typesearch?' + createQueryString('filters', filter_string, params));
    }

    const formatOptionLabel = ({label}) => (
        <div>
          <div style={{ display: "inline-block", backgroundColor: '#5c64f4', padding: '2px 5px', borderRadius: 20, fontSize: '17px' }}>{label}</div>
        </div>
    );

    return (
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
                    menu: () => ({
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
                value={filters}
            />
        </div>
    )
}