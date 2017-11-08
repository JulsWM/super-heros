import React from "react";

const HeroesListItem = props =>
  props.heroes.map(hero => (
    <li key={hero.id} onClick={() => props.onSelectedHero(hero)}>
      <span className="badge">{hero.id}:</span> {hero.superhero}
    </li>
  ));

export default HeroesListItem;
