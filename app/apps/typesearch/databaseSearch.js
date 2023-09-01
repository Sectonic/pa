"use client";

import CreatableSelect from 'react-select/creatable';
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
          <div style={{ display: "inline-block", backgroundColor: '#0f2769', padding: '2px 5px', borderRadius: 20, fontSize: '16px', fontWeight: '400' }}>{label}</div>
        </div>
    );

    const formatGroupLabel = ({ label }) => (
        <div style={{color: 'white', fontSize: '16px', padding: 4, paddingTop: 2, paddingLeft: 10}}>
           <span>{label}</span> 
        </div>
    )

    const nameHandler = (name) => {
        const newParams = params.get('filters') ? JSON.parse(decodeURIComponent(params.get('filters'))) : [];
        newParams.push(name);
        router.push('/apps/typesearch?' + createQueryString('filters', encodeURIComponent(JSON.stringify(newParams)), params));
    }

    const formatCreateLabel = (name) => (
        <div style={{ display: "inline-block", backgroundColor: '#0f2769', padding: '2px 5px', borderRadius: 20, fontSize: '16px', fontWeight: '400' }}>
            <span>Search Name: {name}</span>
        </div>
    )

    return (
        <div className="db_search">
            <CreatableSelect
                styles={{
                    input: (styles) => ({
                        ...styles,
                        color: 'white',
                    }),
                    control: styles => ({ 
                        ...styles,
                        backgroundColor: '#06102b',
                        border: 'none',
                        outline: 'none', 
                        borderRadius: '50px', 
                        color: 'white', 
                        minHeight: '50px', 
                        cursor: 'text', 
                        }),
                    option: (styles) => ({
                        ...styles,
                        backgroundColor: '#06102b',
                        color: 'white',
                        ':hover': {
                            backgroundColor: '#0f2769',
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
                        backgroundColor: '#06102b',
                        borderTop: 'none',
                        borderLeft: '3px solid #0f2769',
                        borderRight: '3px solid #0f2769',
                        borderBottom: '3px solid #0f2769',
                        zIndex: 10,
                        "::-webkit-scrollbar": {
                            width: "3px"
                        },
                        "::-webkit-scrollbar-thumb": {
                            background: "#0f2769"
                        },
                    }),
                    multiValue: (styles) => {
                        return {
                        ...styles,
                        borderRadius: 20,
                        backgroundColor:'#0f2769',
                        };
                    },
                    multiValueLabel: (styles) => ({
                    ...styles,
                    backgroundColor: '#0f2769',
                    color: '#FFF',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20
                    }),
                    multiValueRemove: (styles) => ({
                        ...styles,
                        backgroundColor: '#0f2769',
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
                onCreateOption={nameHandler}
                formatCreateLabel={formatCreateLabel}
                formatGroupLabel={formatGroupLabel}
                value={filters}
                placeholder="Search here"
            />
        </div>
    )
}