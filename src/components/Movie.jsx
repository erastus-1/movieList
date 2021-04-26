import "../style/styles.css";
import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { data } from "../data";
import { Link } from "react-router-dom";

function Movie() {
  const [movieData, setData] = useState([]);
  const getData = () => {
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="container"
      style={{ paddingTop: "100px", paddingBottom: "20px" }}
    >
      <div className="row">
        <div className="Movie">
          {movieData &&
            movieData.length > 0 &&
            movieData.map((item) => (
              <Link to={'/' + item.id} key={item.id}>
              <div className="col-md-4" style={{paddingTop:"5px"}} >
                <Card id="Card" style={{height:"280px", width:"350px"}}>
                  <p style={{ textAlign: "center", color:"blue" }}>{item.title}</p>
                  <img
                    src={item.image} 
                    style={{ height: "250px", width: "350px" }}
                    alt="props"
                  />
                </Card>
              </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
