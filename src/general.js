import React from 'react';

{/*
    A collection of small, generic components that may be reused.

    Current Listing:
        DropdownSelect
*/}

{/* Dropdown menu. Self explanatory */}
export default function DropdownSelect({placeholder, options, fnc, editMode}) {
    
    if(!editMode){
        return (
            <select className='form-select' onChange={ (e) => {fnc(e.target.value)}}>
                <option value="" disabled selected hidden>{placeholder}</option>
                {options.map(item => 
                    <option value={item}>{item}</option>
                )}
            </select>
        );
    }
    else{
        return (
            <select className='form-select' onChange={ (e) => {fnc(e.target.value)}}>
                {options.map(item => 
                    placeholder===item ? <option value={item} selected>{item}</option> : <option value={item}>{item}</option>
                )}
            </select>
        ); 
    }
}