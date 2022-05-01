import React from 'react';
import CardContainerGeneric from './CardContainerGeneric/CardContainerGeneric';
import GenresInDb from './CardContainerGeneric/GenresInDb';
import LastMovieInDb from './CardContainerGeneric/LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import Movie from './Tablemovies/Movie';

function ContentRowTop(){
	
	const data=[
        {
            title:"movies in data base",
            value:21,
            cardColor:"primary",
            icon:"film"
        },
		{
			title:"total awards",
			value:79,
			cardColor:"success",
			icon:"award"
		},
		{
			title:"Actors quantity",
            value:49,
            cardColor:"warning",
            icon:"user"
		}
    ];

	const genres=["Acción","Animación","Comedia", "Drama", "Infantiles", "Animación", "Ciencia Ficción", "Documental", "Fantasia", "Musical"];

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">

						{/*<!-- Movies in Data Base -->*/}
						{
							data.map( (i,j) => {
								return <ContentRowMovies cardColor={i.cardColor} title={i.title} icon={i.icon} value={i.value} key={i.title+j}/>
							})
						}

					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<CardContainerGeneric title="Last movie in Data Base">
							<LastMovieInDb />
						</CardContainerGeneric>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />
						
					</div>

					{/*<!-- Content Row Last Movie in Data Base -->*/}
					
					{/*<!-- Table -->*/}
					<Movie />
					
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;