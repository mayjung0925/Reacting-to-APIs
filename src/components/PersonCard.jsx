import React from "react";

const PersonCard = (props) => {
    return (
        <div className="card col-md-5 mx-3 my-2 p-3" key={props.id}>
            <div className="card-body">
                <h5 className="card-title"> {props.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Gender : ${props.gender}`}</li>
                <li className="list-group-item">{`Age : ${props.age}`}</li>
                <li className="list-group-item">{`Hair Color : ${props.hair_color}`}</li>
                <li className="list-group-item">{`Eye Color : ${props.eye_color}`}</li>

            </ul>
            <a href={`https://ghibliapi.herokuapp.com/people/${props.id}`} className="card-link text-end mt-2"> API resource link</a>
        </div>

    );
}

export default PersonCard;