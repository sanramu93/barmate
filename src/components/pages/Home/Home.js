import { drink } from "../../../apis/theCocktailDb";
import Card from "../../Card/Card";
import "./Home.css";

export default function Home({ filteredDrinks, searchInput, onSearchInput }) {
  const displayFilteredDrinks = () => {
    return filteredDrinks.map((drink) => (
      <Card key={drink.idDrink} drink={drink} />
    ));
  };

  return (
    <section className="page home">
      <input
        className="home__input"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={onSearchInput}
      />
      {displayFilteredDrinks()}
    </section>
  );
}
