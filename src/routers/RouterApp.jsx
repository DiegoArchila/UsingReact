import React from 'react';
import ContentRowTop from '../components/ContentRowTop';
import SearchMovies from '../components/Search/SearchMovies';
import Movie from '../components/Tablemovies/Movie'
import { Routes, Route } from 'react-router-dom';

function RouterApp(){
  return (
    
    <Routes>
        <Route path="/" element={<ContentRowTop />} />
        <Route path="/search" element={<SearchMovies />} />
        <Route path="/tables" element={<Movie />} />
    </Routes>
  )
}

export default RouterApp;