import React from 'react';

export default function DropdownSelect({placeholder, options}) {
    const listItems = options.map(item => 
        <option value={item}>{item}</option>
    );
    return (
        <select className='form-select'>
            <option value="" disabled selected hidden>{placeholder}</option>
            {listItems}
        </select>
    );
}