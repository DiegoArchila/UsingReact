import React from 'react';

// import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies(){

	const movies = [
		{
			"Title": "Parchís",
			"Year": "1983",
			"Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
		},
		{
			"Title": "Brigada en acción",
			"Year": "1977",
			"Poster": "N/A"
		},
	];

	const keyword = 'PELÍCULA DEMO';

	// Credenciales de API
	const apiKey = 'X'; // Intenta poner cualquier cosa antes para probar

	return(
		<div className="container d-flex flex-column align-items-baseline justify-content-center p-0 m-0">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4 d-flex justify-content-center align-self-center col-12 m-0">
						<div className="col-12">
							{/* Buscador */}
							<form method="GET" className="d-flex flex-column">
								<div className="form-group card py-4 px-3 shadow">
									<label htmlFor="" className="text-align-center"><h3 className="text-gray-800">Buscar por título</h3></label>
									<input type="text" className="form-control" />
								</div>
								<button className="btn btn-info align-self-end">Search</button>
							</form>
						</div>
					</div>
					<div className="row  justify-content-center">
						<div className="d-flex col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-12 col-sm-6 col-md-4 col-lg-3 my-4" key={i}>
										<div className="card card-movie mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body p-0">
												<div className="text-center">
													<img 
														className="img px-0 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '300px', objectFit: 'contain' }} 
													/>
												</div>
												<p className="px-2">{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
