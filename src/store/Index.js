import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { My_api_key, TMDB_Base_Url } from "../utils/Constants";
const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenre = createAsyncThunk("netflix/genre", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMDB_Base_Url}/genre/movie/list?api_key=${My_api_key}`
  );
  


  return genres;
});

const arrayOfmoviesData = (array, moviesArray, genres) => {
    // console.log("array: ", array)
    // console.log("genres", genres)
    array.forEach((movie) => {
        // console.log("Movie", movie)
      const movieGenres = [];
      movie.genre_ids.forEach((genre) => {
        // console.log("Searching for genre:", genre);
        const name = genres.find(({ id }) => id === genre);
        if (name) movieGenres.push(name.name);
        
      });
  
      

   
   
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres : movieGenres.slice(0,3)
      })
  })
}

const getMovieData = async(api,genres, paging=false)=>{

    const moviesArray = []
    for( let i = 1 ; moviesArray.length < 80 && i < 10 ; i++ ){
        const {data:{results},}=await axios.get(`${api}${paging ? `&page=${i}`: ""}`)
        arrayOfmoviesData(results,moviesArray,genres)
     
    }
    return moviesArray
}

export const fetchMovies = createAsyncThunk("netflix/trending", async({type}, myThunk)=>{
    
    const {netflix: {genres},} = myThunk.getState()
    return getMovieData(`${TMDB_Base_Url}/trending/${type}/week?api_key=${My_api_key}`,genres, true);

    // console.log(data)
 
})

const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenre.fulfilled, (state, action) => {
        // console.log("Fulfilled action:", action);
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
        // console.log("Fulfilled action:", action);
      state.movies = action.payload;
       
    });
  },
});
export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});
