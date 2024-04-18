import { useState } from "react"
import classes from "./ticTacToe.module.css"

import { CellValue, type CellProps } from "./types"

const BOARD = [
    new Array(3).fill(""),
    new Array(3).fill(""),
    new Array(3).fill(""),
]

export default function TicTacToe() {
    const [board, setBoard] = useState<CellValue[][]>(BOARD);
    const [isX, setIsX] = useState<boolean>(true);
    const [winner, setWinner] = useState<CellValue>("");

    const Cell = ({ children, row, column }: CellProps) => {
        const checkWinner = (board: CellValue[][]): CellValue => {
            const playerKey = isX ? "X" : "O";

            if(
                ([board[0][0], board[0][1], board[0][2]].every(cell => cell === playerKey)) ||
                ([board[1][0], board[1][1], board[1][2]].every(cell => cell === playerKey)) ||
                ([board[2][0], board[2][1], board[2][2]].every(cell => cell === playerKey)) ||
                ([board[0][0], board[1][0], board[2][0]].every(cell => cell === playerKey)) ||
                ([board[0][1], board[1][1], board[2][1]].every(cell => cell === playerKey)) ||
                ([board[0][2], board[1][2], board[2][2]].every(cell => cell === playerKey)) ||
                ([board[0][0], board[1][1], board[2][2]].every(cell => cell === playerKey)) ||
                ([board[0][2], board[1][1], board[2][0]].every(cell => cell === playerKey))
            ) {
                return isX ? "X" : "O";
            }
            
            return "";
        }

        const handleCellClick = () => {
            if(winner) {
                return
            }
            
            const boardCopy = [...board];

            if(boardCopy[row][column]) {
                return;
            }

            boardCopy[row][column] = isX ? "X" : "O";

            const _winner = checkWinner(board);

            setIsX(!isX);
            setBoard(boardCopy);

            if(_winner) {
                setWinner(_winner);
            }
        }
        
        return (
            <div 
                className={`${classes.cell}`}
                onClick={handleCellClick}
            >
                { children }
            </div>
        )
    }

    return (
        <>
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div className={`${classes.row}`}>
                        {row.map((cell, column) => (
                            <Cell
                                row={rowIndex}
                                column={column}
                            >
                                {cell}
                            </Cell>
                        ))}
                    </div>
                ))}
            </div>
            { winner && <div>{`And the winner is... ${winner}`}</div>}
        </>
    )
}