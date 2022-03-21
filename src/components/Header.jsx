import React from "react";
import Studio_Ghibli_Logo from "../assets/Studio_Ghibli_Logo.jpg"

const Header = (props)=>{
    return (
        <>
        <div className="d-flex justify-content-center mt-3" >
                    <img src={Studio_Ghibli_Logo} width={800} height={300} />
                </div>
                <div className="d-flex  justify-content-center">
                    <button id="filmBtn" className="btn btn-outline-secondary m-5" onClick={props.loadFilms}>Films</button>
                    <button id="peopleBtn" className="btn btn-outline-secondary m-5" onClick={props.loadPeople}>People</button>
                </div>
        </>

    );
}

export default Header;