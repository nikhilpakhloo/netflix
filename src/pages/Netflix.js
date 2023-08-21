import React, { useEffect, useState } from "react";
import Topnav from "../components/Topnav";
import { styled } from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Faplay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenre } from "../store/Index";
import SliderContainer from "../components/SliderContainer";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate()
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
  const movies = useSelector((state)=>state.netflix.movies)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getGenre())

  },[])
  useEffect(()=>{
 if (genresLoaded){
  dispatch(fetchMovies({type:"all"}))
 }

  })

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  // console.log(isScrolled);
  // console.log(movies)

  return (
    <HeroContainer>
      <div className="hero">
        <Topnav isScrolled={isScrolled} />
        <img
        className="background-image"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
          alt=""
        />
        <div className="container">
          <div className="title">
            <h1>Avengers:the EndGame</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              enim deserunt officiis nemo similique veniam.
            </p>
          </div>
          <div className="button">
            <button className="playBtn" onClick={()=>navigate('/player')}>Play</button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>

      {/* <Card/> */}
      <SliderContainer movies ={movies}/>
    </HeroContainer>
  );
};
const HeroContainer = styled.div`
  .hero {
    .background-image{
      filter: brightness(40%);
    }
    position: relative;
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .button {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }
      .playBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.5rem;
        cursor: pointer;
      }
      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0.1rem solid white;
        color: white;
        background-color: black;
        border-radius: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.5rem;
        cursor: pointer;
      }
    }
  }
`;

export default Netflix;
