import React from "react";

const Intro = () => {
    return (
        <div className="card">
            <div className="card-header text-center">
            STUDIO GHIBLI
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    
                    <p>Studio Ghibli is a Japanese animation film studio founded on June 15, 1985 by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki. It is best known for its animated feature films. Its mascot and most recognizable symbol is a character named Totoro, a giant catlike spirit from the 1988 anime film My Neighbor Totoro. </p>
                     <footer className="blockquote-footer text-end">"Everybody, Try Laughing. Then Whatever Scares You Will Go Away!”  <cite title="Source Title">  My Neighbor Totoro (1988)</cite></footer>
                </blockquote>
            </div>
        </div>

    );
}

export default Intro;