import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacterByID } from "../../services/getCharacter";
import { Character } from "../../types";
import CharacterDetails from '../../commons/List/CharacterDetails'
import Navbar from "../navbar/Navbar";
type idParam = {
  id: string;
};
const getCharacterResultsByID = (id?: string) => {
  return getCharacterByID(id);
};

const CharacterDetailsList = () => {
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
      <CharacterDetails character={characterDetail}/>
    </Navbar>
  );
};

export default CharacterDetailsList;
