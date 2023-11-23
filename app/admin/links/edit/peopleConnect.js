"use client";

import AsyncSelect from 'react-select/async';
import { getSelectedPeople } from '@lib/typesearch';

export default function PeopleConnect({ people = [], setPeople }) {

    const filterPeople = (people) => {
        return people.map(person => ({ value: person.id, label: person.name + ' | ' + person.typeData.type, name: person.name, type: person.typeData.type, social: person.typeData.social }))
    }

    const handlePeopleChanges = (selectedPeople) => {
        setPeople(selectedPeople.map(person => ({ id: person.value, name: person.name, typeData: {type: person.type, social: person.social} })))
    }
    
    const loadOptions = async (input, callback) => {

        if (!input) {
            callback([])
            return;
        }

        const ppl = await getSelectedPeople(input);
        callback(filterPeople(ppl));
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
        defaultValue={people.length > 0 ? people.map(person => ({ value: person.id, label: person.name + ' | ' + person.typeData.type, name: person.name, type: person.typeData.type, social: person.typeData.social })) : []}
        formatOptionLabel={formatOptionLabel}
        loadOptions={loadOptions}
        placeholder="Connect a person"
        onChange={handlePeopleChanges}
        noOptionsMessage={() => <div style={{fontSize: 14}}>Search a name</div>}
    />
}