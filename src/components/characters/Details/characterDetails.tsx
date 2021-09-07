import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacterByID } from "../../../services/getCharacter";
import { Character } from "../../../types";
import Navbar from "../../navbar/Navbar";
type idParam = {
  id: string;
};
const getCharacterResultsByID = (id?: string) => {
  return getCharacterByID(id);
};

const CharacterDetails = () => {
  const { id } = useParams<idParam>();
  const [characterDetail, setCharacterDetail] = useState<Character>();

  useEffect(() => {
    getCharacterResultsByID(id)
      .then((res) => {
        setCharacterDetail(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Navbar>
      <h1 className="text-center mb-4">Detalles del personaje</h1>
      <div
        className="bg-dark  text-white "
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={
            characterDetail?.biography.alignment === "bad"
              ? "card border-danger bg-transparent text-danger mb-3 "
              : "card border-primary bg-transparent text-primary mb-3"
          }
          style={{
            width: "19rem",
          }}
        >
          <div
            className={
              characterDetail?.biography.alignment === "bad"
                ? "card-header border-danger d-flex flex-row justify-content-between"
                : "card-header border-primary d-flex flex-row justify-content-between"
            }
          >
            <h3>{characterDetail?.id}</h3>
            <h3 className="">
              {characterDetail?.biography.alignment === "bad"
                ? "Villain"
                : "Hero"}
            </h3>
          </div>
          <div className="card-body text-center ">
            <h4 className="card-title">{characterDetail?.name}</h4>

            <img
              src={characterDetail?.image.url}
              alt="Imagen de personaje"
              className=" img-fluid rounded-circle py-2 text "
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div
            className={
              characterDetail?.biography.alignment === "bad"
                ? "card-footer border-danger text-danger mb-3"
                : "card-footer border-primary text-primary mb-3"
            }
          >
            <h3 className="card-title text-center">Detalles del héroe</h3>
            <article className="font-bold">
              <p className="card-text">
                Peso: {characterDetail?.appearance.weight}
              </p>
              <p className="card-text">
                Altura: {characterDetail?.appearance.height}
              </p>
              <p className="card-text">
                Nombre completo: {characterDetail?.biography["full-name"]}
              </p>
              <p className="card-text">
                Alias: {characterDetail?.biography.aliases}
              </p>
              <p className="card-text">
                Color de ojos: {characterDetail?.appearance["eye-color"]}
              </p>
              <p className="card-text">
                Color de cabello: {characterDetail?.appearance["hair-color"]}
              </p>
              <p className="card-text">
                Trabajo: {characterDetail?.work.base} -{" "}
                {characterDetail?.work.occupation}
              </p>
            </article>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default CharacterDetails;
