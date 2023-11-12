import React from 'react';

{/*
    A collection of small, generic components that may be reused.

    Current Listing:
        DropdownSelect
*/}

{/* Dropdown menu. Self explanatory */}
export default function DropdownSelect({placeholder, options, fnc}) {
    const listItems = options.map(item => 
        <option value={item}>{item}</option>
    );
    if(fnc !== '-'){
        return (
            <select className='form-select' onChange={ (e) => {fnc(e.target.value)}}>
                <option value="" disabled selected hidden>{placeholder}</option>
                {listItems}
            </select>
        );
    }
    else{
        return (
            <select className='form-select'>
                <option value="" disabled selected hidden>{placeholder}</option>
                {listItems}
            </select>
        ); 
    }
}