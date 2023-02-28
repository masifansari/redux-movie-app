import React, { useEffect } from 'react'
import MovieListing from '../movieListing/MovieListing';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
// import { addMovies, fetchAsyncMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const {isLoading} = useSelector((state)=>state.movies);

  const movieText = "Harry";
  const showText = "Friends"; 
  const dispatch = useDispatch();
  useEffect(()=>{ 
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));

  },[dispatch])
  return (
    <div>
      <div className='banner-img'>
        <MovieListing isLoading={isLoading}/>
      </div>
    </div>
  )
}

export default Home