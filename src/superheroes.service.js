const heroURL = "";
const getHeroes = () => {
  return fetch(heroURL);
};

export { getHeroes };
