import { React } from "react";
import types from "prop-types";

function ContentRowMovies(props) {

    return (

        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.cardColor} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.cardColor} text-uppercase mb-1`}>{props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas fa-${props.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );    
}

/**
 * Setting the types of the current component
 */
ContentRowMovies.prototype={
    cardColor: types.string,
    title: types.string,
    value: types.number,
    icon:types.string
};
ContentRowMovies.defaultProps={
    cardColor: "primary",
    title: "nulo",
    value: 0,
    icon:"user"
};

export default ContentRowMovies;