import React from 'react';

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