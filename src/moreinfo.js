import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './moreinfo.css';

const schoolDetails = {
    0: {
        universityName: "UT Southwestern Medical Center",
        location: "Dallas, Texas",
        logoSrc: "sample_logo.png",
        gpaRequirement: "3.5",
        meanMcatScore: "510",
        acceptanceRate: "50%",
        applicationFee: "$50",
        amcasAccepted: "Yes",
        aacomas: "No",
        courseworkDescription: "Sample coursework description goes here.",
    },
    2: {
        universityName: "Baylor College of Medicine",
        location: "Houston, Texas",
        logoSrc: "utd_logo.png", 
        gpaRequirement: "3.5",
        meanMcatScore: "505",
        acceptanceRate: "20%",
        applicationFee: "$65",
        amcasAccepted: "No",
        aacomas: "Yes",
        courseworkDescription: "Sample coursework description goes here for UT Dallas.",
    },
    3: {
        universityName: "Texas Tech University Health Sciences Center",
        location: "Lubbock, Texas",
        logoSrc: "ttuhsc_logo.png", 
        meanMcatScore: "520",
        acceptanceRate: "5%",
        applicationFee: "$80",
        amcasAccepted: "Yes",
        aacomas: "No",
        courseworkDescription: "Sample coursework description goes here for Texas Tech University Health Sciences Center.",
    },
    4: {
        universityName: "UNT Health Science Center",
        location: "Denton, Texas",
        logoSrc: "unthsc_logo.png", 
        gpaRequirement: "3.9",
        meanMcatScore: "525",
        acceptanceRate: "8%",
        applicationFee: "$70",
        amcasAccepted: "Yes",
        aacomas: "Yes",
        courseworkDescription: "Sample coursework description goes here for UNT Health Science Center.",
    },
    5: {
        universityName: "UT Health San Antonio Long Campus",
        location: "San Antonio, Texas",
        logoSrc: "utsa_logo.png", 
        gpaRequirement: "3.7",
        meanMcatScore: "515",
        acceptanceRate: "12%",
        applicationFee: "$75",
        amcasAccepted: "Yes",
        aacomas: "Yes",
        courseworkDescription: "Sample coursework description goes here for UT Health San Antonio Long Campus.",
    },
};

const Info = () => {
    const { id } = useParams();
    const schoolDetail = schoolDetails[id];
    const [notes, setNotes] = useState('');

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    if (!schoolDetail) {
        return (
            <div>
                <h1>School Not Found</h1>
                <NavLink to='/about' className='bm-link'>Back To Search</NavLink>
            </div>
        );
    }

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
                    <NavLink to='/about' className='bm-link'>Back To Search</NavLink>
                </div>
            </div>
            <div className='title'>
                <h1>{schoolDetail.universityName}</h1>
                <h2>{schoolDetail.location}</h2>
            </div>
            <div className='utdlogo'>
                <img src={schoolDetail.logoSrc} alt="Logo" />
            </div>
            <div className='reqs'>
                <ul>
                    <li>Average GPA: {schoolDetail.gpaRequirement}</li>
                    <li>Mean MCAT Score: {schoolDetail.meanMcatScore}</li>
                    <li>Acceptance Rate: {schoolDetail.acceptanceRate}</li>
                    <li>Application Fee: {schoolDetail.applicationFee}</li>
                    <li>AMCAS Accepted: {schoolDetail.amcasAccepted}</li>
                    <li>AACOMAS Accepted: {schoolDetail.aacomas}</li>
                </ul>
            </div>
            <div className='coursework'>
                <h2>Required Coursework</h2>
                <p>{schoolDetail.courseworkDescription}</p>
            </div>
        </div>
    );
};

export default Info;
