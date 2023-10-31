import React from 'react';
import DropdownSelect from './general';

export default function Inquiry() {
    const professional = [
        'Neuroscience',
        'Nursing',
        'Biomedical',
        'Surgeon',
        'Other'
    ];
    
    return(
        <DropdownSelect options={professional}/>
    );
}