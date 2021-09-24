import { Character } from "../types";

export const hasMoreThanThreeGoodHeroes = (heroes: Character[]) => {
  let getGoodHeroesLength = heroes.filter(
    (hero) => hero.biography.alignment === "good"
  ).length;
  return getGoodHeroesLength >= 3;
};
export const hasMoreThanThreeBadHeroes = (heroes: Character[]) => {
  let getBadHeroesLength = heroes.filter(
    (hero) => hero.biography.alignment === "bad"
  ).length;
  return getBadHeroesLength >= 3;
};
