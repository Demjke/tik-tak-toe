import { VscDebugRestart } from "react-icons/vsc";

const Restart = ({ onRestart }) => (
    <button className="game-restart restart" onClick={onRestart}>
        <VscDebugRestart />
    </button>
);

export default Restart;
