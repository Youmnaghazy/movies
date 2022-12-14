import React from "react";

const MovieList = (props) =>{
    return(
        <>
        {
            props.movies.map((movie, index)=> (
            <div className="d-flex justify-content-start m-3">
                <img src={movie.poster} alt="movie"></img>
            </div>)
        )}
        </>
    );
};

export default MovieList;