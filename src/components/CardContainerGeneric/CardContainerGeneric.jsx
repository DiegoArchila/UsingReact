import { React } from "react";
import types from "prop-types";

function CardContainerGeneric({title, children}) {
    
    return (
        <div className="col-lg-6 mb-0">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800 text-center">{title}</h5>
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    );

}

/**
 * Statements of types at here!
 */
CardContainerGeneric.prototype={
    title: types.string
};
CardContainerGeneric.defaultProps={
    title:"Undefined"
};

export default CardContainerGeneric;