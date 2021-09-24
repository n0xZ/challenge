import { Character } from "../types";
interface powerStatsParsedI {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

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

export const getAverageStats = (heroes: Character[]) => {
  let initialPowerstats: powerStatsParsedI = {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  };
  const getPowerStats = heroes.map((hero) => {
    return hero.powerstats;
  });
  const mappedPowerStatArray = getPowerStats.map((powerstat) => {
    return Object.entries(powerstat);
  });
  for (let i = 0; i < mappedPowerStatArray.length; i++) {
    initialPowerstats.intelligence += parseInt(mappedPowerStatArray[i][0][1]);
    initialPowerstats.strength += parseInt(mappedPowerStatArray[i][1][1]);
    initialPowerstats.speed += parseInt(mappedPowerStatArray[i][2][1]);
    initialPowerstats.durability += parseInt(mappedPowerStatArray[i][3][1]);
    initialPowerstats.power += parseInt(mappedPowerStatArray[i][4][1]);
    initialPowerstats.combat += parseInt(mappedPowerStatArray[i][5][1]);
  }
};
