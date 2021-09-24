import { useSelector } from "react-redux";
import { State } from "../../state/reducers";
import Navbar from "../navbar/Navbar";
import CharacterList from "../characters/CharacterList";
import {
  getAcumulativeStats,
  getAverageStats,
} from "../../services/getHeroesAlignment";

const Home = (): JSX.Element => {
  let heroes = useSelector((state: State) => state.hero.characters);
  return (
    <Navbar>
      <div className="bg-dark mb-4 h-100">
        <h1 className="mb-5 d-flex flex-row justify-content-center">
          Mi Lista de heroes
        </h1>
        <div className="container-sm pb-4">
          <div className="row">
            {heroes.length > 0 && <CharacterList heroList={heroes} />}
          </div>
        </div>
        <article className="text-primary text-center">
          <h2>Acumulativo powerstats:</h2>
          <p>Intelligence: {getAcumulativeStats(heroes).intelligence}</p>
          <p>Strength: {getAcumulativeStats(heroes).strength}</p>
          <p>Speed: {getAcumulativeStats(heroes).speed}</p>
          <p>Durability: {getAcumulativeStats(heroes).durability}</p>
          <p>Power: {getAcumulativeStats(heroes).power}</p>
          <p>Combat: : {getAcumulativeStats(heroes).combat}</p>
          <h1>{getAverageStats(heroes)}</h1>
        </article>
      </div>
    </Navbar>
  );
};

export default Home;
