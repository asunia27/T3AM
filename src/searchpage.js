import React from 'react'
import {useState} from 'react'
import './search.css'
import { Link } from 'react-router-dom'

const SearchPage = () => {

    const[searchInput, setSearchInput] = useState("");
    const [filteredSchools, setFilteredSchools] = useState([]);
    
    const schools = [
        { id: 0, name: "UT Southwestern Medical Center", city: "Dallas", state: "Texas" },
        { id: 1, name: "Texas A&M School of Medicine", city: "College Station", state: "Texas" },
        { id: 2, name: "Baylor College of Medicine", city: "Houston", state: "Texas" },
        { id: 3, name: "Texas Tech University Health Sciences Center", city: "Lubbock", state: "Texas" },
        { id: 4, name: "UNT Health Science Center", city: "Denton", state: "Texas" },
        { id: 5, name: "UT Health San Antonio Long Campus", city: "San Antonio", state: "Texas" }
    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
      
    const handleSearch = () => {
        const filtered = schools.filter((school) => {
            return school.name.toLowerCase().includes(searchInput.toLowerCase());
        });
        setFilteredSchools(filtered);
    };

    return (
        <div className="Search">
            <div className="blurb">
                <h3 style={{ color: '#4692A2' }}>Medical School Information</h3>
                <p style={{ color: '#4692A2' }}>Type into the search bar the school you're looking for information on!<br></br>Alternatively, search with an empty field to see all schools currently in our database!</p>
            </div>
            <input
                className='form-control mb-3'
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />

            {filteredSchools.map((school, index) => (
                <div key={index} className="result">
                    <Link to={`/T3AM/moreinfo/${school.id}`} key={school.id} className='result'>
                    <h2>{school.name}</h2>
                    <p>{school.city + ', ' + school.state}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SearchPage