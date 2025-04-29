import Square from "./Square";

const Board = ({ squares, userMove }) => (
    <div className="game-board board">
        {squares.map((square, i) => (
            <Square key={i} value={square} index={i} onClick={() => userMove(i)} />
        ))}
    </div>
);

export default Board;
