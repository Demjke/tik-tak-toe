const Square = ({ value, onClick }) => (
    <button className="game-board__square square" onClick={onClick}>
        {value}
    </button>
);

export default Square;
