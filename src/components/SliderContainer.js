import React from 'react'
import { styled } from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({movies}) => {
    const getMoviesbetween = (start,end)=>{
        return movies.slice(start,end)
    }
  return (
    <SliderWrapper>
    <MovieSlider data = {getMoviesbetween(0,10)} title ="Only on netflix"/>
    <MovieSlider data = {getMoviesbetween(10,20)} title ="Trending Now"/>
    <MovieSlider data = {getMoviesbetween(20,30)} title ="Popular on Netflix"/>
    <MovieSlider data = {getMoviesbetween(30,40)} title ="New Releases"/>
    <MovieSlider data = {getMoviesbetween(40,50)} title ="Epic"/>
    <MovieSlider data = {getMoviesbetween(50,60)} title ="Sci-Fi"/>
    <MovieSlider data = {getMoviesbetween(60,70)} title ="Romantic Movies"/>
    <MovieSlider data = {getMoviesbetween(70,80)} title ="Action Movies"/>

    </SliderWrapper>
  )
}
const SliderWrapper = styled.div `

`

export default SliderContainer