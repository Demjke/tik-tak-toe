import TakImg from "../../assets/images/tak.png";
import TikImg from "../../assets/images/tik.png";

const Square = ({ value, onClick }) => {
    const squareImg = value === "X" ? TikImg : value === "0" ? TakImg : null;

    return (
        <button className="game-board__square square" onClick={onClick}>
            {squareImg && <img src={squareImg} alt="" />}
        </button>
    );
};

export default Square;
