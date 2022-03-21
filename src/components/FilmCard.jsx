import React from "react";

const FilmCard = (props) => {
   
            return <div className="card col-md-5 mx-3 my-2 p-3  justify-content-center" key={props.id}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="text-muted">Directed by  </span>{props.director}</li>
                    <li className="list-group-item "><span className="text-muted">Released in  </span>{props.releaseDate}</li>
                    <li className="list-group-item "><span className="text-muted">Rotten Tomato Score  </span>{props.rtScore}</li>

                </ul>
                <p className="card-text p-3 ">{props.description}</p>
                <a href={`https://ghibliapi.herokuapp.com/films/${props.id}`} className="card-link text-end"> API resource link</a>

            </div>
        
}

export default FilmCard;



