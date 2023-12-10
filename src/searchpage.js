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
            <div className='top-bar'>
                <div className='d-flex flex-column align-items-center'>
                    <div className="blurb">
                        <h3 style={{ color: '#4692A2' }}>Medical School Information</h3>
                        <p style={{ color: '#4692A2' }}>Type into the search bar the school you're looking for information on!<br></br>Alternatively, search with an empty field to see all schools currently in our database!</p>
                    </div>
                    <input
                        id="searchInput"
                        className='form-control mb-3'
                        style={{ width: '40rem' }}
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
                </div>
            </div>

            <div className='result-container d-flex flex-column mb-5'>
                {filteredSchools.length > 0 ? filteredSchools.map((school, index) => (
                    <Link to={`/T3AM/moreinfo/${school.id}`} key={school.id} className="result my-2">
                        <div key={index} className="result-box pt-3">
                            <h2 className='rounded-pill p-2 px-5'>{school.name}</h2>
                            <p>{school.city + ', ' + school.state}</p>
                        </div>
                    </Link>            
                )):
                <div className='mt-3' style={{color: '#16697A'}}>
                    <h3>No schools found.</h3>
                </div>}
            </div>
        </div>
    );
};

export default SearchPage