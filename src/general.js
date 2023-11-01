import React from 'react';

{/*
    A collection of small, generic components that may be reused.

    Current Listing:
        DropdownSelect
*/}

{/* Dropdown menu. Self explanatory */}
export default function DropdownSelect({options}){
    const listItems = options.map(item => 
        <option>{item}</option>
    );
    return (
        <div>
            <select>
                {listItems}
            </select>
        </div>
    );
}