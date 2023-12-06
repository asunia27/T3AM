import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './moreinfo.css';

const schoolDetails = {
    0: {
        universityName: "UT Southwestern Medical Center",
        location: "Dallas, Texas",
        logoSrc: "https://cdn.discordapp.com/attachments/199610242852454400/1172824110833872896/utswlogo.png?ex=6561b892&is=654f4392&hm=21bcb83e0ecd85f2bbd169c8c0f0342e97c99066d22d351bc95c6ff3feaea953&",
        gpaRequirement: "3.89",
        meanMcatScore: "516",
        acceptanceRate: "15%",
        applicationFee: "$0",
        amcasAccepted: "No",
        aacomas: "No",
        courseworkDescription: [
            "Biology - 14 semester credit hours", <br/>,
            "Biochemistry - 3 semester credit hours", <br/>,
            "Chemistry - 12 semester credit hours", <br/>,
            "English - 6 semester credit hours", <br/>,
            "Mathematics - 3 semester credit  hours", <br/>,
            "Physics - 8 semester credit hours"
        ],
    },
    1: {
        universityName: "Texas A&M School of Medicine",
        location: "College Station, Texas",
        logoSrc: "https://cdn.discordapp.com/attachments/199610242852454400/1181887604900249732/tamu_400x400.jpg?ex=6582b19b&is=65703c9b&hm=0e82b9740145f1972c785d437d0370e5f4f11826c8efd068dc4336deabf6ebea&",
        gpaRequirement: "3.84",
        meanMcatScore: "512",
        acceptanceRate: "5.4%",
        applicationFee: "$0",
        amcasAccepted: "No",
        aacomas: "No",
        courseworkDescription: [
            "General Biology - 8 semester credit hours", <br/>,
            "Advanced Biological Sciences - 6 semester credit hours", <br/>,
            "General Chemistry - 8 semester credit hours", <br/>,
            "Organic Chemistry - 8 semester credit hours", <br/>,
            "General Physics - 8 semester credit hours", <br/>,
            "Math-Based Statistics - 3 semester credit  hours", <br/>,
            "English - 6 semester credit hours"
        ],
    },
    2: {
        universityName: "Baylor College of Medicine",
        location: "Houston, Texas",
        logoSrc: "https://cdn.discordapp.com/attachments/199610242852454400/1172819235089694750/Baylor_College_of_Medicine_Logo.png?ex=6561b407&is=654f3f07&hm=f4c72b09c16d9e08914a43f6b1355b53f1b987f2e4915198cdf9d036fc681113&", 
        gpaRequirement: "3.92",
        meanMcatScore: "518",
        acceptanceRate: "4.3%",
        applicationFee: "$100",
        amcasAccepted: "No",
        aacomas: "No",
        courseworkDescription: ["Biology - 3-4 semester hours", <br/>,
            "Biochemistry - 3-4 semester hours", <br/>,
            "Organic Chemistry - 6-8 semester hours", <br/>,
            "Humanities/Behavioral Sciences - 12 semester hours", <br/>,
            "Expository Writing - 3-4 semester hours", <br/>,
            "Mathematics- 3-4 semester  hours (biostatics preferred)"
        ],
    },
    3: {
        universityName: "Texas Tech University Health Sciences Center",
        location: "Lubbock, Texas",
        logoSrc: "https://cdn.discordapp.com/attachments/199610242852454400/1172819534055485471/Texas_Tech_University_Health_Sciences_Center_logo.svg.png?ex=6561b44e&is=654f3f4e&hm=2bb8ddc619170be163325979df189e5ce3e06017132549f0861a25d20437678d&", 
        gpaRequirement: "3.83",
        meanMcatScore: "512",
        acceptanceRate: "9.1%",
        applicationFee: "$75",
        amcasAccepted: "No",
        aacomas: "No",
        courseworkDescription: [
            "General Biology or Zoology - 6 hours", <br/>,
            "Biology Labs - 2 hours" , <br/>,
            "Upper Division Biology - 6 hours", <br/>,
            "General Chemistry - 6 hours", <br/>,
            "General Chemistry Labs - 2 hours", <br/>,
            "Organic Chemistry - 6 hours", <br/>,
            "Organic Chemistry Labs - 2 hours", <br/>,
            "Physics - 6 hours", <br/>,
            "Physics Labs - 2 hours", <br/>,
            "English - 6 hours", <br/>,
            "Statistics - 3 hours"
        ],
    },
    4: {
        universityName: "UNT Health Science Center",
        location: "Denton, Texas",
        logoSrc: "https://cdn.discordapp.com/attachments/199610242852454400/1172821932064903198/untlogo.png?ex=6561b68a&is=654f418a&hm=8332ae69855a9a87e8f069ce6b05e2b9bb3b57170d51cc1333a91f12106a8e97&", 
        gpaRequirement: "3.63",
        meanMcatScore: "506",
        acceptanceRate: "12.4%",
        applicationFee: "$0",
        amcasAccepted: "No",
        aacomas: "No",
        courseworkDescription: [
            "Biology - 12 hours", <br/>,
            "Biology Labs - 2 hours", <br/>,
            "Chemistry - 6 hours", <br/>,
            "Chemistry Labs - 2 hours", <br/>,
            "Organic Chemistry - 6 hours", <br/>,
            "Organic Chemistry Labs - 2 hours", <br/>,
            "Physics - 6 hours", <br/>,
            "Physics Labs - 2 hours", <br/>,
            "English - 6 hours", <br/>,
            "Statistics - 3 hours"
        ],
    },
    5: {
        universityName: "UT Health San Antonio Long Campus",
        location: "San Antonio, Texas",
        logoSrc: "https://cdn.discordapp.com/attachments/199610242852454400/1172822593414369370/utsalogo.png?ex=6561b728&is=654f4228&hm=3096b040b48c9c167796e826cfc2e1970081040c5b156e9895acb35b68334831&", 
        gpaRequirement: "3.84",
        meanMcatScore: "514",
        acceptanceRate: "8.4%",
        applicationFee: "$0",
        amcasAccepted: "No",
        aacomas: "No",
        courseworkDescription: [
            "Biology - 12 hours", <br/>,
            "Biology Labs - 2 hours", <br/>,
            "Chemistry - 6 hours", <br/>,
            "Chemistry Labs - 2 hours", <br/>,
            "Organic Chemistry - 6 hours", <br/>,
            "Organic Chemistry Labs - 2 hours", <br/>,
            "Physics - 6 hours", <br/>,
            "Physics Labs - 2 hours", <br/>,
            "Biochemistry - 3 hours", <br/>,
            "Statistics - 3 hours"
        ]
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
                <h1 style={{color: '#4692A2'}}>School Not Found</h1>
                <NavLink to='/T3AM/about' className='bm-link'><div>Back To Search</div></NavLink>
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
                    <NavLink to='/T3AM/about' className='bm-link'><div>Back To Search</div></NavLink>
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
