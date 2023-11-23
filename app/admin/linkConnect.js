"use client";

import AsyncSelect from 'react-select/async';
import { getSelectedLinks } from '@lib/typesearch';

export default function LinkConnect({ links = [], setLinks }) {

    const filterLinks = (links) => {
        return links.map(link => ({ value: link.id, label: link.name, url: link.url, peopleIds: link.peopleIds }))
    }

    const handleLinkChanges = (selectedLinks) => {
        setLinks(selectedLinks.map(link => ({ id: link.value, name: link.label, url: link.url, peopleIds: link.peopleIds })))
    }
    
    const loadOptions = async (input, callback) => {

        if (!input) {
            callback([])
            return;
        }

        const links = await getSelectedLinks(input);
        callback(filterLinks(links));
    }

    const formatOptionLabel = ({label}) => (
        <div>
          <div style={{ 
            display: "inline-block", 
            padding: '2px 5px 0 2px', 
            borderRadius: 20, 
            fontSize: '14px', 
            fontWeight: '400', 
            maxWidth: 300, 
            overflow: 'hidden', 
            borderRadius: 0,
            width: '100%',
            textOverflow: 'ellipsis', 
            }}>
                {label}
            </div>
        </div>
    );

    return <AsyncSelect 
        styles={{
            input: (styles) => ({
                ...styles,
                color: 'white',
                fontSize: '14px',
            }),
            placeholder: (styles) => ({
                ...styles,
                fontSize: '14px'
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
                boxShadow: 'none'
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
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
                backgroundColor: 'transparent',
                overflow : 'hidden'
            }),
            menuList: (provided) => ({
                ...provided,
                width: '100%',
                margin: '0 auto',
                paddingTop: 0,
                paddingBottom: 0,
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
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
        isMulti
        value={links.length > 0 ? links.map(link => ({ value: link.id, label: link.name, url: link.url, peopleIds: link.peopleIds })) : []}
        formatOptionLabel={formatOptionLabel}
        loadOptions={loadOptions}
        placeholder="Connect a previous link"
        onChange={handleLinkChanges}
        noOptionsMessage={() => <div style={{fontSize: 14}}>Search a Link</div>}
    />
}