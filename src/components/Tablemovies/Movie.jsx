import React from 'react';
import "./Movie.css";

function Movie(){
    return(
        <div className="col card shadow m-0">
			{/*<!-- PRODUCTS LIST -->*/}
			<h1 className="h3 mb-2 mt-2 text-gray-800 text-center">All the movies in the Database</h1>
			
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
								<tr>
									<td>01</td>
									<td>Reto al destino</td>
									<td>20</td>
									<td>15</td>
									<td>120</td>
								</tr>
								<tr>
									<td>02</td>
									<td>La caida del halcon negro</td>
									<td>10</td>
									<td>18</td>
									<td>240</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>            
        </div>
    )
}
export default Movie;