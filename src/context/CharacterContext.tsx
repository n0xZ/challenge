import React, { createContext, useEffect, useState } from "react";
import { getCharacterByCharacters } from "../services/getCharacter";

import { Character } from "../types";

import { CharacterContextProvider } from "../types";
export const characterContext = createContext<CharacterContextProvider>({
  listCharacters: [],
});
const CharacterProvider: React.FC = ({ children }) => {
  const [listCharacters, setListCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacterByCharacters("a").then((res) => {
      setListCharacters(res);
    });
  }, []);
  return (
    <characterContext.Provider value={{ listCharacters }}>
      {children}
    </characterContext.Provider>
  );
};

export default CharacterProvider;
