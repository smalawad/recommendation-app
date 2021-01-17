import React, { useState } from "react";
import "./styles.css";
// import { useState } from "react";

const fevoritesDb = {
  Music: [
    { name: "Main dekhu teri Photo, Luka Chuppi", rating: "4.2/5" },
    { name: "Aankh Marey, Simbha", rating: "4/5" }
  ],

  Food: [
    {
      name: "JowarRoti, Indian cuisine",
      rating: "5/5"
    },
    {
      name: "Chole Bhature, Indian cuisine",
      rating: "4/5"
    }
  ],
  Travel: [
    {
      name: "South Island, New Zealand",
      rating: "4.5/5"
    },
    {
      name: "Paris, France",
      rating: "4.2/5"
    }
  ],
  ComedyProgram: [
    {
      name: "Comedy Kiladigalu",
      rating: "5/5"
    },
    {
      name: "MajaBharatha",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setTopic] = useState("ComedyProgram");
  function genreClickHandler(genre) {
    setTopic(genre);
  }
  return (
    <div className="App">
      <h1> Recommendation </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout favorites. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(fevoritesDb).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              backgroundColor: "#f0c38e",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {fevoritesDb[selectedGenre].map((fevorite) => (
            <li
              key={fevorite.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                backgroundColor: "#ffeebb",
                border: "1px solid #f0c38e",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {fevorite.name} </div>
              <div style={{ fontSize: "smaller" }}> {fevorite.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
