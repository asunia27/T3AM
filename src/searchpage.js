import React from 'react'
import {useState,useEffect} from 'react'
import './search.css'
import { Link } from 'react-router-dom'

const SearchPage = () => {

    const[searchInput, setSearchInput] = useState("");
    const [filteredSchools, setFilteredSchools] = useState([]);
    const [storedValue, setStoredValue] = useState(null);
    const schools = [
        { id: 0, name: "UT Southwestern Medical Center", city: "Dallas", state: "Texas" },
        { id: 1, name: "Texas A&M School of Medicine", city: "College Station", state: "Texas" },
        { id: 2, name: "Baylor College of Medicine", city: "Houston", state: "Texas" },
        { id: 3, name: "Texas Tech University Health Sciences Center", city: "Lubbock", state: "Texas" },
        { id: 4, name: "UNT Health Science Center", city: "Denton", state: "Texas" },
        { id: 5, name: "UT Health San Antonio Long Campus", city: "San Antonio", state: "Texas" }
    ];
    useEffect(() => {
        const storedValue = localStorage.getItem('rValue');
        const storedValuea = storedValue ? storedValue.replace(/["']/g, '') : '';
      
        if (storedValue !== null) {
          setSearchInput(storedValuea);
          setStoredValue(storedValuea);

          const filtered = schools.filter((school) => {
            return school.name.toLowerCase().includes(storedValuea.toLowerCase());
          });
          setFilteredSchools(filtered);
        }
      }, []);
      

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
            <input
                id="searchInput"
                className='form-control mb-3'
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                        localStorage.setItem('rValue', JSON.stringify(searchInput));
                        setStoredValue(searchInput);
                    }
                }}
            />

            {filteredSchools.map((school, index) => (
                <Link to={`/T3AM/moreinfo/${school.id}`} key={school.id} className="result">
                <div key={index} className="result-box">
                    <h2>{school.name}</h2>
                    <p>{school.city + ', ' + school.state}</p>
                </div>
            </Link>            
            ))}
        </div>
    );
};

export default SearchPage