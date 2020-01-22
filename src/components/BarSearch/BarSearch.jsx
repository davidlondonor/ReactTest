import React from "react";
import "./BarSearch.css";
import search from "../../assets/search-solid.svg";

const BarSearch = ({ Searching, inputSearch, fethIndata }) => (
    <>
        <h1 className="bar">Prueba David Londoño</h1>
        <p className="p_details">Debes dar clic en la lupa</p>
        <div className="searchBar">
            <button onClick={() => fethIndata()}>
                <img className="search" src={search} alt="Search" />
            </button>
            <input
                className="input"
                type="text"
                placeholder="Search all courses"
                id="Searching"
                value={Searching}
                onChange={inputSearch}
            />
        </div>
    </>
);

export default BarSearch;
