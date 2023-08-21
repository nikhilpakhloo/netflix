import React, { useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export default React.memo (function Card  ({ movieData }) {
  const [onHovered, setOnHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <CardContainer
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie poster"
        onClick={() => navigate("/player")}
      />
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            {/* <img
              src={` https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie poster"
              onClick={() => navigate("/player")}
            /> */}
            <video
            src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
            autoPlay
            loop
            controls
          />
          </div>
          <div className="info-container">
            <h3 className="moviename" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons">
              <div className="controls">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="like" />
                <RiThumbDownFill title="Dislike" />
                <BsCheck title="Remove from playlist" />
                <AiOutlinePlus title="Add to Playlist" />
                <div className="info">
                  <BiChevronDown title="more info" />
                </div>
              </div>
            </div>
            <div className="genre">
              <ul>
                {movieData.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </CardContainer>
  );
})  ;

const CardContainer = styled.div`
  margin-top: 1rem;
  max-width: 230px;
 
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
 

  
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -24vh;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-out;
    .image-video-wrapper {
      position: relative;
      height: 140px;
      video {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
    }
    .info-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 0.5rem;
      .moviename {
        color: white;
      }

      .icons {
        display: flex;
        justify-content: space-between;
        .controls {
          display: flex;
          gap: 0.5rem;
        }
        svg {
          color: white;
          border: 0.1rem solid white;
          font-size: 1.5rem;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            color: #b8b8b8;
          }
        }
      }
      .genre {
        display: flex;
        color: white;
        ul {
          display: flex;
          gap: 1rem;
          li {
            padding-right: 0.7rem;
            font-size: 15px;
            &:first-of-type {
              list-style-type: none;
            }
          }
        }
      }
    }
  }
`;


