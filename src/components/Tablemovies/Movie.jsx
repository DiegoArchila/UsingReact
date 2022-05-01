import { Component } from "react";
import "./Movie.css";
import MovieList from "./MovieList";

class Movie extends Component {

	constructor(){
		super();
		this.state={
			movies:[]
		};
	}

	componentDidMount(){
		// let res= await fetch("http://localhost:3001/api/movies");
	    // let data= await res.json();
		// console.log("didMount", data);
		// this.setState({
		// 	movies:data.data
		// })
		setTimeout(()=>{
			//Simulo 5 Segundos de espera :V
			fetch("http://localhost:3001/api/movies")
				.then(data => data.json())
				.then(data => this.setState({
					movies:data.data
				}))
		},5000);
	}
    
	
	render(){

		if(this.state.movies.length!=0){
			return(
				<div className="col card shadow mb-4">
					{/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 my-2 text-gray-800 text-center">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="mb-4 border-0 shadow p-0">
						<div className="p-0 m-0 border-0">
							<div className="table-responsive">
								<table className="table table-bordered m-0 rounded border-0" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
											<th>Id</th>
											<th>Titulo</th>
											<th>Calificación</th>
											<th>Premios</th>
											<th>Duración</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
											<th>Id</th>
									 		<th>Titulo</th>
									 		<th>Calificación</th>
									 		<th>Premios</th>
									 		<th>Duración</th>
									 	</tr>
									</tfoot>
									<tbody>
										{	
											this.state.movies.map((movie, index) => {
													return <MovieList {...movie} key={"MovieList"+index}/>
												}	
											)
										}					
									</tbody>
								</table>
							</div>
						</div>
					</div>            
				</div>
			)
		} else {
			return(
				<div className="col card shadow mb-4">
					{/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 my-2 text-gray-800 text-center">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="mb-4 border-0 shadow p-0">
						<div className="p-0 m-0 border-0">
							<div className="col-12 mb-4 text-center" id="buttonBg">
								<h6 className="text-gray-800">Wait response...</h6>
								<div class="spinner-grow text-secondary" role="status">
									<span class="sr-only">Loading...</span>
								</div>
							</div>
						</div>
					</div>            
				</div>
			);
	
		}

	}	
}
export default Movie;