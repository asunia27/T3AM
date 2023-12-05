import React, {useState} from 'react';
import Notif from './notif';
import DropdownSelect from './general';

export default function Inquiry() {
    const fieldList = [
        'Neuroscience',
        'Nursing',
        'Biomedical',
        'Surgeon',
        'Other'
    ];
    
    const topicList = [
        'After College',
        'Medical School',
        'Clinical Experience',
        'Recommendation Letters',
        'Other'
    ];

    const [field, setField] = useState("");
    const [topic, setTopic] = useState("");
    const [inq, setInq] = useState("");

    const sendInquiry = () => {
        let valid = true;
        if(!fieldList.includes(field) || !topicList.includes(topic)){
            if(!fieldList.includes(field)){
                Notif('Semester field is not filled in!', 'error', '/');
            }
            if(!topicList.includes(topic)){
                Notif('Year field is not filled in!', 'error', '/');
            }
            valid = false;
        }
        if(inq === ""){
            Notif('Inquiry is blank!', 'error', '/');
            valid = false;
        }
        if(valid){
            Notif('Inquiry sent successfully!', 'success', '/');
            setInq("");
        }
    }

    return(
        <div>
            <div>
                <h3 style={{ color: '#4692A2' }}>Ask a Pro!</h3>
                <p style={{ color: '#4692A2' }}>Select your medical field and what topic you'd like to ask about, compose your message, and we will send your inquiry to a relevant professional!</p>
            </div>
                <div className='d-flex justify-content-between row mb-5'>
                <div className='col-5'>
                    <DropdownSelect fnc={setField} placeholder={'Field Type'} options={fieldList}/>
                </div>
                <div className='col-5'>
                    <DropdownSelect fnc={setTopic} placeholder={'Inquiry Type'} options={topicList}/>
                </div>
            </div>
            <div className='mb-5'>
                <textarea value = {inq} onChange={ (e) => setInq(e.target.value)} name='inquiryInput' className='form-control' placeholder='Inquiry begins here...' style={{minHeight: '15rem'}}></textarea>
            </div>
            <div className='mb-5'>
                <button onClick={ () => sendInquiry() } className='btn btn-primary btn-lg px-5' style={{backgroundColor: '#2b85a1'}}>Send</button>
            </div>  
        </div>
    );
}