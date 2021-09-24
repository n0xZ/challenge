import { useSelector } from "react-redux";
import { State } from "../../state/reducers";
import Navbar from "../navbar/Navbar";
import CharacterList from "../characters/CharacterList";
import { getAverageStats } from "../../services/getHeroesAlignment";

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
        <button className="btn btn-info" onClick={()=> getAverageStats(heroes)}>obtener promedio stats</button>
      </div>
    </Navbar>
  );
};

export default Home;
