import React, { useEffect, useState } from "react";
import { data } from "../data";

const Details = (props) => {
  const [title, setTitle] = useState('')
  const [cast, setCast] = useState([])
  const [length, setLength] = useState('')
  const [genre, setGenre] = useState([])
  const [image, setImage] = useState('')

  useEffect(() => {
    console.log(props)
    let movieId = props.match.params.movie_id;
    console.log(movieId)
    let selectedMovie = data.filter(item => {
      return item.id === movieId
    })
    setTitle(selectedMovie[0].title)
    setCast(selectedMovie[0].cast)
    setLength(selectedMovie[0].length)
    setGenre(selectedMovie[0].genre)
    setImage(selectedMovie[0].image)
    console.log(selectedMovie)
    console.log(data)
  }, [props.match])
    return (
      <div style={{marginTop: '100px'}}>
        <div className="container">
        <div className="row">
          <div className="col-md-6" style={{textAlign:"center"}}>
        <h3><strong>{title}</strong></h3>
        <h5>{length} long.</h5>
        <h5 style={{fontWeight:"bold"}}>Casted by: </h5>
        <div>
          {cast.map(castmember => {
            return <p>{castmember}</p>
          })}
        </div>
        <div>
          {genre.map(genreType => {
            return <p><strong style={{
              display: "inline-block",
              float: "right",
              color: "blue",
              paddingRight:"5px"
            }}> {genreType}</strong></p>
          })}
        </div>
        </div>
        <div className="col-md-6">
        <div >
          <img style={{width: '400px'}}src={image} alt="props"/>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
}

export default Details