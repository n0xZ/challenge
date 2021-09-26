import { Character } from "../../types";

interface CharacterListPropsI {
  character: Character | undefined;
}
const CharacterDetails: React.FC<CharacterListPropsI> = ({ character }) => {
  return (
    <div className="container-sm  ">
      <div className="row ">
       
        <div className="col"></div>
        <div className="col-sm-3 text-center">
          <h1 className="text-center mb-4">Detalles del personaje</h1>

          <div
            className={
              character?.biography.alignment === "bad"
                ? "card border-danger bg-transparent text-danger mb-3 w-100 text-center"
                : "card border-primary bg-transparent text-primary mb-3 w-100 text-center"
            }
          >
            <div
              className={
                character?.biography.alignment === "bad"
                  ? "card-header border-danger d-flex flex-row justify-content-between h-4"
                  : "card-header border-primary d-flex flex-row justify-content-between"
              }
            >
              <h3>{character?.id}</h3>
              <h3 className="">
                {character?.biography.alignment === "bad" ? "Villain" : "Hero"}
              </h3>
            </div>
            <div className="card-body text-center ">
              <h4 className="card-title">{character?.name}</h4>

              <img
                src={character?.image.url}
                alt="Imagen de personaje"
                className=" img-thumbnail rounded-circle py-2 text "
              />
            </div>
            <div
              className={
                character?.biography.alignment === "bad"
                  ? "card-footer border-danger text-danger mb-3"
                  : "card-footer border-primary text-primary mb-3"
              }
            >
              <h3 className="card-title text-center">Detalles del héroe</h3>
              <article className="font-bold">
                <p className="card-text">
                  Peso: {character?.appearance.weight}
                </p>
                <p className="card-text">
                  Altura: {character?.appearance.height}
                </p>
                <p className="card-text">
                  Nombre completo: {character?.biography["full-name"]}
                </p>
                <p className="card-text">
                  Alias: {character?.biography.aliases}
                </p>
                <p className="card-text">
                  Color de ojos: {character?.appearance["eye-color"]}
                </p>
                <p className="card-text">
                  Color de cabello: {character?.appearance["hair-color"]}
                </p>
                <p className="card-text">
                  Trabajo: {character?.work.base} - {character?.work.occupation}
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    
    </div>
  );
};

export default CharacterDetails;
