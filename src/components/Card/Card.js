import { BsStar } from "react-icons/bs";
import "./Card.css";

export default function Card({ drink }) {
  console.log(drink);
  const { strDrink, strDrinkThumb } = drink;
  return (
    <div className="card">
      <img
        className="card__img"
        src={`${strDrinkThumb}`}
        alt={`${strDrink} cocktail`}
      />
      <div className="card__body">
        <div className="card__name">
          <h3>{strDrink}</h3>
          <BsStar />
        </div>
        <p className="card__ingredients">ingredients</p>
        <p className="card__recipe">Pour the campari....</p>
      </div>
    </div>
  );
}
