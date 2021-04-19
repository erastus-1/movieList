import "../style/styles.css";
import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

function Movie() {
  const [data, setData] = useState([]);
  const getData =()=>{
    fetch("data.js", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(function (response) {
        console.log(response)
        return response.json();
    })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
    });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="Card">{
      data && data.length >0 && data.map((item) => (
        <div className="row">
          <Card.Group
            className="container"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
             <div className="col-3">
            <Card>
              <p style={{textAlign:"center"}}>{item.title}</p>
              <img src="{item.image}" style={{ height: "200px", width: "350px" }} alt="" />

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
