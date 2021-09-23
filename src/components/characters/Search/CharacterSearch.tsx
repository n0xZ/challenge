import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { characterContext } from "../../../context/CharacterContext";
import { getCharacterResults } from "../../../services/getCharacter";
import { CharacterResults } from "../../../types";
import Navbar from "../../navbar/Navbar";

interface SearchParams {
  name: string;
}
const CharacterSearch = () => {
  const { name } = useParams<SearchParams>();
  const [CharacterResults, setCharacterResults] = useState<CharacterResults>();
  const [messageResponse, setmessageResponse] = useState<string>("");
  const { saveCharacter } = useContext(characterContext);
  useEffect(() => {
    getCharacterResults(name).then((res) => {
      setCharacterResults(res);
    });
  });

  return (
    <Navbar>
      <div>
        <div className="container-sm pb-4">
          <div className="row bg-dark">
            <h1 className="text-center mb-4">Personajes encontrados</h1>
            {CharacterResults?.results.map((char) => (
              <div key={char.id} className="col-sm-3 mb-4">
                <div
                  className={
                    char?.biography.alignment === "bad"
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
                      alt="Imagen de personaje"
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
                    <article className="text-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          const response = saveCharacter(char);
                          setmessageResponse(response);
                          console.log(response);
                        }}
                      >
                        Agregar al equipo
                      </button>
                    </article>
                  </div>
                </div>
              </div>
            ))}
            <div
              className={
                messageResponse.length > 1 ? "alert alert-primary" : ""
              }
              role="alert"
            >
              {messageResponse}
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default CharacterSearch;
