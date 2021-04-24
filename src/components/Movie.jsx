import "../style/styles.css";
import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { data } from "../data";

function Movie() {
  const [movieData, setData] = useState([]);
  const getData = () => {
    setData(data);
  };
  useEffect(() => {
    getData();
    console.log(data);
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
              <div className="col-md-3" style={{paddingTop:"5px"}}>
                <Card id="Card" style={{hieght:"400px"}} >
                  <p style={{ textAlign: "center", color:"blue" }}>{item.title}</p>
                  <img
                    src={item.image}
                    style={{ height: "250px", width: "300px" }}
                    alt="props"
                  />
                  <Card.Content extra style={{height:"100px"}}>
                    <p>
                      <strong>Cast by: </strong>
                      {item.cast}
                    </p>
                    <p
                      style={{
                        display: "inline-block",
                        float: "right",
                        color: "blue",
                      }}
                    >
                      {item.genre}
                    </p>
                    <p>{item.length} long</p>
                  </Card.Content>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
