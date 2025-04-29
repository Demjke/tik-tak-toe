const UserInfo = ({ user, winner }) => (
    <div className="game-username">{winner ? `Winner: ${winner}` : `User ${user ? "X" : "0"}`}</div>
);

export default UserInfo;
