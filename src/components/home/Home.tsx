import React, { useContext, useEffect, useState } from "react";
import { characterContext } from "../../context/CharacterContext";

import { Character } from "../../types";
const Home = (): JSX.Element => {
  const { listCharacters } = useContext(characterContext);

  console.log(listCharacters);
  const [pages, setPages] = useState(0);
  const paginationCharacters = () => {};
  return (
    <div className="bg-dark mb-4">
      <h1 className="mb-5 d-flex flex-row justify-content-center">
        Mi lista de heroes
      </h1>
      <div className="container-sm pb-4">
        <div className="row ">
          {listCharacters.map((char) => (
            <div key={char.id} className="col-sm-3 mb-4">
              <div
                className={
                  char.biography.alignment === "bad"
                    ? "card border-danger bg-transparent text-danger mb-3 "
                    : "card border-primary bg-transparent text-primary mb-3"
                }
                style={{
                  width: "16rem",
                }}
              >
                <div
                  className={
                    char.biography.alignment === "bad"
                      ? "card-header border-danger d-flex flex-row justify-content-between"
                      : "card-header border-primary d-flex flex-row justify-content-between"
                  }
                >
                  <h3>{char.id}</h3>
                  <h3 className="">
                    {char.biography.alignment === "bad" ? "Villain" : "Hero"}
                  </h3>
                </div>
                <div className="card-body text-center ">
                  <h4 className="card-title">{char.name}</h4>

                  <img
                    src={char.image.url}
                    alt="Character Image"
                    className=" img-fluid rounded-circle py-2 "
                    style={{ width: "150px", height: "150px" }}
                  />
                </div>
                <div
                  className={
                    char.biography.alignment === "bad"
                      ? "card-footer border-danger text-danger mb-3"
                      : "card-footer border-primary text-primary mb-3"
                  }
                >
                  <h3 className="card-title text-center">Stats</h3>
                  <article className="font-bold">
                    <p className="card-text">
                      Intelligence: {char.powerstats.intelligence}
                    </p>
                    <p className="card-text">
                      Strength: {char.powerstats.strength}
                    </p>
                    <p className="card-text">Speed: {char.powerstats.speed}</p>
                    <p className="card-text">
                      Durability: {char.powerstats.durability}
                    </p>
                    <p className="card-text">Power: {char.powerstats.power}</p>
                    <p className="card-text">
                      Combat: {char.powerstats.combat}
                    </p>
                  </article>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
