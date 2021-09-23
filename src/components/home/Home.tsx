import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state/reducers";
import Navbar from "../navbar/Navbar";
import CharactersList from "../characters/CharactersList";
import {actionCreators} from '../../state/actions-creators/ActionCreators'
import { bindActionCreators } from "redux";
const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  let heroes = useSelector((state: State) => state.hero.characters);

  return (
    <Navbar>
      <div className="bg-dark mb-4">
        <h1 className="mb-5 d-flex flex-row justify-content-center">
          Mi Lista de heroes
        </h1>
        <div className="container-sm pb-4">
          <div className="row ">
            {heroes.length > 0 && <CharactersList heroList={heroes} />}
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Home;
