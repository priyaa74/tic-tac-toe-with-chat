import React, { useState } from "react";
import Loader from "./Loader";
import { MessageList, MessageInput, Window } from "stream-chat-react";
import Board from "./Board";
function Game({ channel, setStartGame }) {
  const [playersJoined, setPlayersJoined] = useState(
    channel?.state.watcher_count === 2
  );
  const [result, setResult] = useState({ winner: "none", state: "none" });

  channel.on("user.watching.start", (event) => {
    setPlayersJoined(event.watcher_count === 2);
  });

  if (!playersJoined) {
    return(
    <div style={{width:"100%", height:"150px",backgroundColor:"black",color:"rgb(192, 240, 228)",fontSize:"16px",fontWeight:"bolder",borderRadius:"10px",padding:"10px",boxShadow:"rgba(10px 10px 10px aqua)"}}>Waiting for other players to join...
    <Loader/>
    </div>
    );
  }
  return (
    <div className="gameContainer">
      <Board channel={channel} result={result} setResult={setResult} />
      <Window>
        <MessageList
          hideDeletedMessages
          messageActions={["react"]}
          defaultItemHeight={100}
          disableDateSeparator
          closeReactionSelectorOnClick
        />
        <MessageInput noFiles />
      </Window>
      <div className="leave">
      {result.state === "Won" && <div className="result"> {result.winner} Won The Game</div>}
      {result.state === "Tie" && <div className="result"> Game Tie!!</div>}
      <div>
      <button
        onClick={async () => {
          await channel.stopWatching();
          setStartGame(false);
        }}
      >
        Leave Game
      </button>
      </div>
      </div>
    </div>
  );
}

export default Game;