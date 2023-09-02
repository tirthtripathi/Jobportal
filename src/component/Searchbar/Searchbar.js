import {useState} from 'react'
import React from 'react'
import './Searchbar.css'
import Searchdata from './Search.json'
import SearchIcon from '@mui/icons-material/Search'

function Searchbar() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="block">
            <div className="Search-bar">
                <input type="text" placeholder="Search.."
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <button id="Search-button" type="submit"><SearchIcon /></button>
            </div>
            <div className="Data">
                {Searchdata.filter((val) => {
                    if (searchTerm === ""){
                        return null;
                    } else if(val.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }else{
                        return null;
                    }
                    })
                    .map((val, key) => {
                        return (
                            <div className="user" key={key}>
                                 <p>{val.jobTitle}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    )
}
export default Searchbar;