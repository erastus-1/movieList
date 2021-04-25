import React, { useEffect, useState } from "react";
import { data } from "../data";

const Details = (props) => {
  const [title, setTitle] = useState('')
  const [cast, setCast] = useState([])
  const [length, setLength] = useState('')
  const [genre, setGenre] = useState([])
  const [image, setImage] = useState('')

  useEffect(() => {
    let movieId = props.match.params.movie_id;
    let selectedMovie = data.filter(item => {
      return item.id == movieId
    })
    setTitle(selectedMovie[0].title)
    setCast(selectedMovie[0].cast)
    setLength(selectedMovie[0].length)
    setGenre(selectedMovie[0].genre)
    setImage(selectedMovie[0].image)
    console.log(selectedMovie[0])
  }, [props.match])
    return (
      <div style={{marginTop: '100px'}}>
        <h4>{title}</h4>
        <h3>Cast</h3>
        <div>
          {cast.map(castmember => {
            return <p>{castmember}</p>
          })}
        </div>
        <h5>Length: {length}</h5>
        <div>
          {genre.map(genreType => {
            return <p>{genreType}</p>
          })}
        </div>
        <div >
          <img style={{width: '200px'}}src={image} />
        </div>
      </div>
    );
}

export default Details