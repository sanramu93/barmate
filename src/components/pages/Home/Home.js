import { drink } from "../../../apis/theCocktailDb";
import Card from "../../Card/Card";
import "./Home.css";

export default function Home({ allDrinks }) {
  const displayAllDrinks = () => {
    return allDrinks.map((drink) => <Card key={drink.idDrink} drink={drink} />);
  };

  return (
    <section className="page home">
      <input className="home__input" type="text" placeholder="Search..." />
      <Card drink={drink} />
      {/* {displayAllDrinks()} */}
    </section>
  );
}
