import "../style/styles.css";
import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { data } from '../data'

function Movie() {
  const [movieData, setData] = useState([]);
  const getData =()=>{
    setData(data)
  }
  useEffect(()=>{
    getData()
    console.log(data)
  },[])

  return (
    <div className="Card">{
      movieData && movieData.length >0 && movieData.map((item) => (
        <div className="row" key={item.id}>
          <Card.Group
            className="container"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
             <div className="col-3">
            <Card>
              <p style={{textAlign:"center"}}>{item.title}</p>
              <img src={item.image} style={{ height: "200px", width: "350px" }} alt="" />

              <Card.Content extra>
                <p>{item.length} long</p>
                <p
                  style={{
                    display: "inline-block",
                    float: "right",
                    color: "blue",
                  }}
                >
                  <strong>{item.genre}</strong>
                </p>
                <small style={{textAlign:"center"}}>{item.cast}</small>
              </Card.Content>
            </Card>
            </div>  
          </Card.Group>
          </div>
        ))}
    </div>
  );
}

export default Movie;
