import axios from "axios";
import { Character, CharacterResults } from "../types";

export const getCharacterByID = async (id: Number): Promise<Character> => {
  const resp = await axios.get<Character>(
    `https://www.superheroapi.com/api.php/10220303546485083/${id}`
  );

  return resp.data;
};

export const getCharacterByCharacters = async (
  letter: String
): Promise<Character[]> => {
  const resp = await axios.get<CharacterResults>(
    `https://www.superheroapi.com/api.php/10220303546485083/search/${letter}`
  );

  return resp.data.results;
};

export const getCharacterAppearanceByID = async (
  id: String
): Promise<Character["appearance"]> => {
  const resp = await axios.get<Character>(
    `https://www.superheroapi.com/api.php/10220303546485083/${id}/appearance`
  );
  return resp.data.appearance;
};
export const getCharacterWorkByID = async (
  id: String
): Promise<Character["work"]> => {
  const resp = await axios.get<Character>(
    `https://www.superheroapi.com/api.php/10220303546485083/${id}/work`
  );
  return resp.data.work;
};
