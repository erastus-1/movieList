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
    <div className="Card">
      {movieData &&
        movieData.length > 0 &&
        movieData.map((item) => (
          <div
            className="container"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <div className="row">
              <div className="col-lg-4">
                <div key={item.id}>
                  <Card>
                    <Card.Header>
                      <p style={{ textAlign: "center" }}>{item.title}</p>
                    </Card.Header>
                    <img
                      src={item.image}
                      style={{ height: "200px", width: "290px" }}
                      alt=""
                    />
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
                      <small style={{ textAlign: "center" }}>
                        <strong>Cast by: </strong>
                        {item.cast}
                      </small>
                    </Card.Content>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Movie;
