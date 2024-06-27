import React from 'react';

import '../index.css';

import Knight from '../pieces/knight.js';
import Rook from '../pieces/rook.js';
import Bishop from '../pieces/bishop.js';
import Consul from '../pieces/consul.js';
import Queen from '../pieces/queen.js';
import King from '../pieces/king.js';
import Pawn from '../pieces/pawn.js';

export default function ChessAnalyzeControl(props) {

  const [pawnW, setPawnW] = React.useState({})
  const [rookW, setRookW] = React.useState({})
  const [knightW, setKnightW] = React.useState({})
  const [bishopW, setBishopW] = React.useState({})
  const [consulW, setConsulW] = React.useState({})
  const [queenW, setQueenW] = React.useState({})
  const [kingW, setKingW] = React.useState({})

  const [pawnB, setPawnB] = React.useState({})
  const [rookB, setRookB] = React.useState({})
  const [knightB, setKnightB] = React.useState({})
  const [bishopB, setBishopB] = React.useState({})
  const [consulB, setConsulB] = React.useState({})
  const [queenB, setQueenB] = React.useState({})
  const [kingB, setKingB] = React.useState({})

  const [changePlayerLabel, setChangePlayerLabel] = React.useState("White starts")
  const [modeLabel, setModeLabel] = React.useState("Start Game mode")

  React.useEffect(() => {
    setPawnW(new Pawn(1, "P"))
    setRookW(new Rook(1, "R"))
    setKnightW(new Knight(1, "N"))
    setBishopW(new Bishop(1, "B"))
    setConsulW(new Consul(1, "C"))
    setQueenW(new Queen(1, "Q"))
    setKingW(new King(1, "K"))

    setPawnB(new Pawn(2, "P"))
    setRookB(new Rook(2, "R"))
    setKnightB(new Knight(2, "N"))
    setBishopB(new Bishop(2, "B"))
    setConsulB(new Consul(2, "C"))
    setQueenB(new Queen(2, "Q"))
    setKingB(new King(2, "K"))

  }, [])

  const handleOnClick = (piece, player) => {
    props.pieceSelected(piece, player)
  }

  const handlePlayerChanged = () => {
    if(changePlayerLabel === "White starts") setChangePlayerLabel("Black starts")
    if(changePlayerLabel === "Black starts") setChangePlayerLabel("White starts")
    props.startPlayerChanged()
  }

  const startGame = () => {
    if(modeLabel === "Start Game mode") setModeLabel("Start Analzye mode")
    if(modeLabel === "Start Analzye mode") setModeLabel("Start Game mode")
    props.startGame()
  }

  const startPosition = () => {
    props.startPosition()
  }

  return (
    <div>
    <div>
        <h2>Choose Piece</h2>
        <button className={"square other-square" } onClick={() => handleOnClick(pawnW.name, 1)} style={ pawnW.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(rookW.name, 1)} style={ rookW.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(knightW.name, 1)} style={ knightW.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(bishopW.name, 1)} style={ bishopW.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(consulW.name, 1)} style={ consulW.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(queenW.name, 1)} style={ queenW.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(kingW.name, 1)} style={ kingW.style}> </button>
        
        <button className={"square other-square" } onClick={() => handleOnClick(pawnB.name, 2)} style={ pawnB.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(rookB.name, 2)} style={ rookB.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(knightB.name, 2)} style={ knightB.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(bishopB.name, 2)} style={ bishopB.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(consulB.name, 2)} style={ consulB.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(queenB.name, 2)} style={ queenB.style}> </button>
        <button className={"square other-square" } onClick={() => handleOnClick(kingB.name, 2)} style={ kingB.style}> </button>
    </div>
    <h4>Change player</h4>
    <div>
      <button onClick={() => handlePlayerChanged()}>{changePlayerLabel}</button>
    </div>

    <div>
      <button onClick={() => startGame()}>{modeLabel}</button>
    </div>
    <div>
      <button onClick={() => startPosition()}>Start position</button>
    </div>
    </div>
  );

}
