import "./Home.css";

export default function Home({ showMenu }) {
  return (
    <div className={`container ${showMenu ? "container--pushed" : ""}`}>
      <h1>Home</h1>
    </div>
  );
}
