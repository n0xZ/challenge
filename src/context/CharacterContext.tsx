import React, { createContext, useEffect, useState } from "react";
import { getCharacterByCharacters } from "../services/getCharacter";

import { Character } from "../types";

import { CharacterContextProvider } from "../types";
export const characterContext = createContext<CharacterContextProvider>({
  listCharacters: [],
  myHeroes: [],
  saveCharacter: () => "",
  deleteCharacter: () => "",
});
const CharacterProvider: React.FC = ({ children }) => {
  const [listCharacters, setListCharacters] = useState<Character[]>([]);
  const [myHeroes, setMyHeroes] = useState<Character[]>([]);

  const saveCharacter = (char: Character) => {
    const getGoodHeroes = myHeroes.filter(
      (hero) => hero.biography.alignment === "good"
    );
    const getBadHeroes = myHeroes.filter(
      (hero) => hero.biography.alignment === "bad"
    );
    if (getGoodHeroes.length > 3 || getBadHeroes.length > 3) {
      return "No se puede agregar más de 3 personajes de la misma alineación";
    } else {
      setMyHeroes([...myHeroes, char]);
      return "Personaje agregado con exito!";
    }
  };

  const deleteCharacter = (id: string) => {
    setMyHeroes(myHeroes.filter((hero) => hero.id !== id));
    return "Heroe eliminado con éxito";
  };
  return (
    <characterContext.Provider
      value={{
        listCharacters,
        myHeroes,
        saveCharacter,
        deleteCharacter,
      }}
    >
      {children}
    </characterContext.Provider>
  );
};

export default CharacterProvider;
