import {Component, Fragment} from "react";
// import types from "prop-types";
import "./GenresInDb.css";
import CardContainerGeneric from "./CardContainerGeneric"

class GenresInDb extends Component {

    constructor(){
        
        super();
        
        this.state = {
            genreList: []
        };
    };

    componentDidMount(){
        /**
         * Simulo que dura 3 Segundos la espera de la respuesta :V
         */
        setTimeout(() => {
        fetch("http://localhost:3001/api/genres")
            .then(data => data.json())
            .then(genres => {
                console.log(genres);
                this.setState({
                    genreList: genres.data
                });                
            })
            .catch(error => console.log("El error es:",error));
        }, 3000);    
    };

    render() {

        if(this.state.genreList.length<=0) {
            return(

                <Fragment>
                    <CardContainerGeneric title="Genres in Data Base" key="Card1">
                        <div className="row">
                            <div className="col-12 mb-4 text-center" id="buttonBg">
                                <h6 className="text-gray-800">Wait response...</h6>
                                <div class="spinner-grow text-secondary" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
					    </div>
				    </CardContainerGeneric>
                </Fragment>
            );    
        }else{
            return(
                <CardContainerGeneric title="Genres in Data Base">
                    <div className="row">
                        {this.state.genreList.map((genre,index) => {
                            let response=(
                                <div className="col-12 col-md-6 mb-4" key={genre+index}>
                                    <div className="card bg-dark text-white text-center">
                                        <div className="card-body button-genres" style={{cursor: "pointer"}}>
                                            {genre.name}
                                        </div>
                                    </div>
                                </div>
                            );
                            return response;                    
                        })}    
                    </div>                        
                </CardContainerGeneric>
            );   
        }
    };
};

/**
 * Statements of types at here!
 */
// GenresInDb.prototype={
//     title:types.string
// };

// GenresInDb.defaultProps={
//     title:"Genres"
// }

export default GenresInDb;