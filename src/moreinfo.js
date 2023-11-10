import React, { useState } from 'react';
import './moreinfo.css';
import {NavLink} from 'react-router-dom';

const Info = (props) => {
    const [notes, setNotes] = useState('');
    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    return (
        <div>
            <div className='notes-box'>
                <h2>Notes</h2>
                <textarea
                    className='notes-textarea'
                    placeholder='Notes Here'
                    value={notes}
                    onChange={handleNotesChange}
                />
                <div className='backarea'>
                <NavLink to='/' className='bm-link'>Back To Search</NavLink>
                </div>
            </div>
            <div className='title'>
                <h1>{props.universityName}</h1>
                <h2>{props.location}</h2>
            </div>
            <div className='utdlogo'>
                <img src={props.logoSrc} alt="Logo" />
            </div>
            <div className='reqs'>
                <ul>
                    <li>Average GPA: {props.gpaRequirement}</li>
                    <li>Mean MCAT Score: {props.meanMcatScore}</li>
                    <li>Acceptance Rate: {props.acceptanceRate}</li>
                    <li>Application Fee: {props.applicationFee}</li>
                    <li>AMCAS Accepted: {props.amcasAccepted}</li>
                    <li>AACOMAS Accepted: {props.aacomas}</li>
                </ul>
            </div>
            <div className='coursework'>
                <h2>Required Coursework</h2>
                <p>{props.courseworkDescription}</p>
            </div>
        </div>
    );
};

export default Info;
