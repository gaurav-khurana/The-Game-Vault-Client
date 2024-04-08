import "./GameCard.scss";
// import Spiderman from "../../assets/images/spiderman1.png";
import { Link, useNavigate } from "react-router-dom";

function GameCard({ game }) {
  // const { console } = useParams;

  const navigate = useNavigate();

  const id = game.id;

  const handleConsole = () => {
    if (id >= 1 && id <= 10) {
      navigate(`/games/xbox/${game.id}`);
      return;
    }
    if (id >= 11 && id <= 20) {
      navigate(`/games/ps/${game.id}`);
      return;
    }
  };

  return (
    <>
      {/* <div>GameCard</div> */}
      <article className="gamecard" onClick={handleConsole}>
        {/* <Link to={`/games/ps/${game.id}`}> */}
        {/* <Link to={`/games/xbox/${game.id}`}> */}
        {/* <Link to={`/games/${console}/${game.id}`}> */}
        <img
          className="gamecard__image"
          src={game.image1}
          //   src={Spiderman}
          alt={`Image of ${game.title}`}
        />

        <h3 className="gamecard__title">{game.title}</h3>

        {/* <h3 className="gamecard__title">Spiderman 2 Miles Morales</h3> */}
        {/* </Link> */}
      </article>
    </>
  );
}

export default GameCard;
