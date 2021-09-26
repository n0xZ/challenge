import { axiosInstance } from "../config/axiosInstance";
import { Character, CharacterResults } from "../types";

export const getCharacterByID = async (id?: string): Promise<Character> => {
  const resp = await axiosInstance.get<Character>(`${id}`);

  return resp.data;
};

export const getCharacterByCharacters = async (
  letter?: string
): Promise<Character[]> => {
  const resp = await axiosInstance.get<CharacterResults>(`search/${letter}`);

  return resp.data.results;
};

export const getCharacterResults = async (
  letter?: string
): Promise<CharacterResults> => {
  const resp = await axiosInstance.get<CharacterResults>(`/search/${letter}`);
  return resp.data;
};

export const getCharacterAppearanceByID = async (
  id: String
): Promise<Character["appearance"]> => {
  const resp = await axiosInstance.get<Character>(`/${id}/appearance`);
  return resp.data.appearance;
};
export const getCharacterWorkByID = async (
  id: String
): Promise<Character["work"]> => {
  const resp = await axiosInstance.get<Character>(`/${id}/work`);
  return resp.data.work;
};
