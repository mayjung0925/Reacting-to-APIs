import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import FilmCard from "./components/FilmCard";
import PersonCard from "./components/PersonCard";




const App = () => {
    //useState() to update data about films and people
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

    const [filmBtnClicked, setFilmBtnClicked] = useState(false);
    const [peopleBtnClicked, setPeopleBtnClicked] = useState(false);

    // run useEffect() only if the film button is clicked
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))


    }, [filmBtnClicked])

    // run useEffect() only if the people button is clicked
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople))

    }, [peopleBtnClicked])

    //function attached to the film button 
    const loadFilms = () => {

        setFilmBtnClicked(true);
        setPeopleBtnClicked(false);
    };

    // function attached to the people button 
    const loadPeople = () => {

        setFilmBtnClicked(false);
        setPeopleBtnClicked(true);
    }

    if (filmBtnClicked) {


        return (
            //An Image and two buttons for films and people
            <div className="container">
                <Header loadFilms={loadFilms} loadPeople={loadPeople} />

                {/* it renders the data of films on the web page*/}
                <div className="d-flex flex-row flex-wrap justify-content-center">

                    {films.map((film) =>
                        <FilmCard key={film.id}
                            title={film.title}
                            director={film.director}
                            releaseDate={film.release_date}
                            rtScore={film.rt_score}
                            description={film.description}
                            id={film.id} />
                    )}
                </div>
            </div>
        )
    }
    else if (peopleBtnClicked) {
        return (
            // An Image and two buttons for films and people
            <div className="container">
                <Header loadFilms={loadFilms} loadPeople={loadPeople} />

                {/* it renders the data of people on the web page*/}
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {people.map((person) =>
                        <PersonCard key={person.id}
                            name={person.name}
                            gender={person.gender}
                            age={person.age}
                            hair_color={person.hair_color}
                            eye_color={person.eye_color}
                            id={person.id} />
                    )}
                </div>
            </div>
        )
    } else {
        return (
            //An Image ,two buttons for films and people, and introduction 
            <div className="container">
                <Header loadFilms={loadFilms} loadPeople={loadPeople} />
                <Intro />
            </div>

        )
    }
};

export default App;
