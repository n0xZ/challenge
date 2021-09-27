import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/reducers/index";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";
import { getCharacterResults } from "../../services/getCharacter";
import { actionCreators } from "../../state/actions-creators/ActionCreators";
import { Character, CharacterResults } from "../../types";
import Navbar from "../../components/Navbar/Navbar";
import {
  hasMoreThanThreeGoodHeroes,
  hasMoreThanThreeBadHeroes,
} from "../../services/getHeroesAlignment";
interface SearchParams {
  name: string;
}
const CharacterSearch = () => {
  const dispatch = useDispatch();
  const { addHero } = bindActionCreators(actionCreators, dispatch);
  const { name } = useParams<SearchParams>();
  const [CharacterResults, setCharacterResults] = useState<CharacterResults>();
  const [messageResponse, setmessageResponse] = useState<string | undefined>(
    " "
  );
  let heroes = useSelector((state: State) => state.hero.characters);
  useEffect(() => {
    getCharacterResults(name).then((res) => {
      setCharacterResults(res);
    });
  }, []);
  const addHeroBasedOnHeroesAlignment = (hero: Character) => {
    if (
      hero.biography.alignment === "good" &&
      hasMoreThanThreeGoodHeroes(heroes)
    ) {
      return "No se puede agregar más de tres heroes de tipo 'hero'";
    }
    if (
      hero.biography.alignment === "bad" &&
      hasMoreThanThreeBadHeroes(heroes)
    ) {
      return "No se puede agregar más de tres heroes de tipo 'villain'";
    } else {
      addHero(hero);
      return "Heroe Agregado con éxito";
    }
  };
  return (
    <Navbar>
      <div>
        <div className="container-sm pb-4">
          <div className="row bg-dark">
            <h1 className="text-center mb-4">Personajes encontrados</h1>
            {CharacterResults?.response === "error"
              ? null
              : CharacterResults?.results.map((char) => (
                  <div key={char.id} className="col-sm-3 mb-4">
                    <div
                      className={
                        char?.biography.alignment === "bad"
                          ? "card border-danger bg-transparent text-danger mb-3 "
                          : "card border-primary bg-transparent text-primary mb-3"
                      }
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
                          {char.biography.alignment === "bad"
                            ? "Villain"
                            : "Hero"}
                        </h3>
                      </div>
                      <div className="card-body text-center ">
                        <h4 className="card-title">{char.name}</h4>

                        <img
                          src={char.image.url}
                          alt="Imagen de personaje"
                          className=" img-fluid rounded-circle py-2 "
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
                          <Link to={`/characters/details/${char.id}`}>
                            <button className="btn btn-primary mb-2">
                              Detalles del heroe
                            </button>
                          </Link>
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              setmessageResponse(
                                addHeroBasedOnHeroesAlignment(char)
                              );
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
                messageResponse && messageResponse.length > 1
                  ? "alert alert-primary"
                  : ""
              }
              role="alert"
            >
              {CharacterResults?.response === "error"
                ? "Error al buscar un heroe. Por favor, vuelva a ingresar otro heroe de nuevo"
                : messageResponse}
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default CharacterSearch;
