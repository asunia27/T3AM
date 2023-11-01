import React from 'react';
import Notif from './notif';
import DropdownSelect from './general';

export default function Inquiry() {
    const field = [
        'Neuroscience',
        'Nursing',
        'Biomedical',
        'Surgeon',
        'Other'
    ];
    
    const topic = [
        'After College',
        'Medical School',
        'Clinical Experience',
        'Recommendation Letters',
        'Other'
    ];

    return(
        <div>
            <div>
                <h3>Ask a Pro!</h3>
                <p>Select your medical field and what topic you'd like to ask about, compose your message, and we will send your inquiry to a relevant professional!</p>
            </div>
                <div className='d-flex justify-content-between row mb-5'>
                <div className='col-5'>
                    <DropdownSelect placeholder={'Field Type'} options={field}/>
                </div>
                <div className='col-5'>
                    <DropdownSelect placeholder={'Inquiry Type'} options={topic}/>
                </div>
            </div>
            <div className='mb-5'>
                <textarea name='inquiryInput' className='form-control' placeholder='Inquiry begins here...' style={{minHeight: '15rem'}}></textarea>
            </div>
            <div className='mb-5'>
                <button onClick={
                    () => Notif('Inquiry sent successfully!', 'success', '/')
                } className='btn btn-primary btn-lg px-5' style={{backgroundColor: '#2b85a1'}}>Send</button>
            </div>  
        </div>
    );
}