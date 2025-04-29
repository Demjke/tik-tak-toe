import { useCallback, useState } from "react";
import { checkWinnerGame } from "../../utils/checkWinner";
import Board from "./Board";
import Restart from "./Restart";
import UserInfo from "./UserInfo";

const INITIAL_SQUARES = Array(9).fill(null);

const Game = () => {
    const [squares, setSquares] = useState(INITIAL_SQUARES);
    const [user, setUser] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleMove = useCallback(
        index => {
            if (squares[index] || winner) return;

            const newSquares = [...squares];
            const currentPlayer = user ? "X" : "0";
            newSquares[index] = currentPlayer;

            const winnerGame = checkWinnerGame(newSquares);
            if (winnerGame) setWinner(currentPlayer);

            setSquares(newSquares);
            setUser(!user);
        },
        [squares, winner, user]
    );

    const restartGame = useCallback(() => {
        setSquares(INITIAL_SQUARES);
        setUser(false);
        setWinner(null);
    }, []);

    return (
        <div className="game">
            <div className="game-title">tic-tac-toe</div>
            <UserInfo user={user} winner={winner} />
            <Board squares={squares} userMove={handleMove} />
            <Restart onRestart={restartGame} />
        </div>
    );
};

export default Game;
