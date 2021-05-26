import React from "react";
import {TableRow as TableRowType} from "../types";
import TableRow from "./table-row";
import {getId} from "../utils";
import {useData} from "../contexts/data-context";

export interface TableBodyProps {
    rows: TableRowType[];
}

/**
 * TableBody component
 *
 * @param rows
 * @constructor
 *
 * @return JSX.Element
 */
const TableBody: React.FC<TableBodyProps> = ({rows}: TableBodyProps): JSX.Element => {
    const [data, setData] = useData();
    const [ stateRows, setRows ] = React.useState( rows );
    const removeRow = React.useCallback((index: number) => {
        rows.splice(index, 1);
        setData([...data]);
        setRows([...rows]);
    }, [rows, data, setData]);

    return (
        <tbody data-test="component-table-body">
        {
            stateRows.map((row: TableRowType, index: number) => (
                <TableRow data-test="component-table-row" row={row} key={getId(row)} onRemove={() => removeRow(index)} />
            ))
        }
        </tbody>
    );
};

export default TableBody;
