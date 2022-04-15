import { React } from "react";
import types from "prop-types";
import "./GenresInDb.css";

function GenresInDb(props) {
    return (
       
        <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body button-genres" style={{cursor: "pointer"}}>
                    {props.title}
                </div>
            </div>
        </div>
    
    );
}

/**
 * Statements of types at here!
 */
GenresInDb.prototype={
    title:types.string
};

GenresInDb.defaultProps={
    title:"Genres"
}

export default GenresInDb;