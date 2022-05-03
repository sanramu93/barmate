import { BsStar } from "react-icons/bs";
import sample from "../../assets/img/sample.jpg";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <img className="card__img" src={sample} alt="Sample cocktail" />
      <div className="card__body">
        <div className="card__name">
          <h3>Americano</h3>
          <BsStar />
        </div>
        <p className="card__ingredients">ingredients</p>
        <p className="card__recipe">Pour the campari....</p>
      </div>
    </div>
  );
}
