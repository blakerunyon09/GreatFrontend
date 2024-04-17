import { useState } from "react"
import classes from  "./grid.module.css"

export default function Grid() {
    const [ rows, setRows ] = useState<number>(10);
    const [ columns, setColumns ] = useState<number>(10);

    const Cell = ({ text }: { text: string}) => {
        return (
            <div className={classes.gridCell}>
                <div>{ text }</div>
            </div>
        )
    }

    const GridUI = ({ rows, columns }: { rows: number; columns: number; }) => {
        const rowRange = new Array(rows).fill(0);
        const columnsRange = new Array(columns).fill(0);

        return (
            <div className={classes.grid}>
                {rowRange.map((_, rowIndex) => (
                <div className={classes.flexRow}>
                    {columnsRange.map((_ ,columnIndex) => (
                        <Cell 
                            text={
                                ((rowIndex + 1) + (columnIndex * rows)).toString()
                            } 
                        />
                    ))}
                </div>
                ))}
            </div>
        )
    }

    return (
        <main>
            <form
                className={classes.flexCol}
                onSubmit={(e: React.FormEvent) => {
                e.preventDefault();

                const data = new FormData(e.target as HTMLFormElement);
                const rows = data.get('rows');
                setRows(Number(rows));
                const columns = data.get('columns');
                setColumns(Number(columns));
            }}>
                <div>
                    <label htmlFor="rows">
                        Rows: 
                    </label>
                    <input 
                        id="rows" 
                        type="number" 
                        name="rows"
                        min={1}
                    />
                </div>
                <div>
                    <label htmlFor="columns" >
                        Columns: 
                    </label>
                    <input 
                        id="columns" 
                        type="number" 
                        name="columns"
                        min={1}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {!!rows && !!columns && <GridUI 
                rows={rows}
                columns={columns}
            />}
        </main>
    )
}