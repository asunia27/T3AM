import React from 'react'
import {useState} from 'react'

const SearchPage = () => {

    const[searchInput, setSearchInput] = useState("");

    const schools = [
        {name: "UT Southwestern Medical Center", city: "Dallas", state: "Texas"},
        {name: "Texas A&M School of Medicine", city: "College Station", state: "Texas"},
        {name: "Baylor College of Medicine", city: "Houston", state: "Texas"},
        {name: "Texas Tech University Health Sciences Center", city: "Lubbock", state: "Texas"},
        {name: "UNT Health Science Center", city: "Denton", state: "Texas"},
        {name: "UT Health San Antonio Long Campus", city: "San Antonio", state: "Texas"}
    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
      
    if (searchInput.length > 0) {
        schools.filter((school) => {
            return school.name.match(searchInput);
        });
    }

    return (
        <div className="Search">
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
            />

            {schools.filter(school =>{
                if (searchInput === '') {
                    return school;
                } else if (school.name.toLowerCase().includes(searchInput.toLowerCase())) {
                    return school;
                }
            }).map( (school, index) => {
                <div key="index">
                    <h2>{school.name}</h2>
                    <p>{school.city + ", " + school.state}</p>
                </div>
            })}
        </div>

    );
}

export default SearchPage