const UserInfo = ({ user, winner }) => (
    <div className="game-username">
        {winner ? (
            <span style={{ color: winner === "X" ? "rgb(245, 77, 98)" : "rgb(135, 228, 58)" }}>Winner: {winner}</span>
        ) : (
            <>
                User
                {user ? (
                    <span style={{ color: "rgb(245, 77, 98)" }}> X</span>
                ) : (
                    <span style={{ color: "rgb(135, 228, 58)" }}> O</span>
                )}
            </>
        )}
    </div>
);

export default UserInfo;
