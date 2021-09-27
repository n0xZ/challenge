import { useSelector } from "react-redux";
import { State } from "../../state/reducers";
import Navbar from "../../components/Navbar/Navbar";
import CharacterList from "../characters/CharacterList";
import {
  getAcumulativeStats,
  getAverageStats,
} from "../../services/getHeroesAlignment";

const Home = (): JSX.Element => {
  let heroes = useSelector((state: State) => state.hero.characters);
  return (
    <Navbar>
      <div className="bg-dark mb-2 h-100">
        <h1 className="mb-5 d-flex mb-2 flex-row justify-content-center">
          Mi Lista de heroes
        </h1>
        {heroes.length >= 2 ? (
          <h1 className="mb-4">{getAverageStats(heroes)}</h1>
        ) : null}
        <div className="container-sm pb-4">
          <div className="row">
            {heroes.length > 0 && <CharacterList heroList={heroes} />}
          </div>
        </div>
        <article className="text-primary text-center">
          {heroes.length >= 2 ? (
            <div>
              {" "}
              <h2>Acumulativo powerstats:</h2>
              <ul className="list-unstyled">
                <li>
                  Intelligence: {getAcumulativeStats(heroes).intelligence}
                </li>
                <li>Strength: {getAcumulativeStats(heroes).strength}</li>
                <li>Speed: {getAcumulativeStats(heroes).speed}</li>
                <li>Durability: {getAcumulativeStats(heroes).durability}</li>
                <li>Power: {getAcumulativeStats(heroes).power}</li>
                <li>Combat: : {getAcumulativeStats(heroes).combat}</li>
              </ul>
            </div>
          ) : null}
        </article>
      </div>
    </Navbar>
  );
};

export default Home;
