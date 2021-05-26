import React from "react";
import TableHeader from "./table-header";
import TableBody from "./table-body";
import {TableRow} from "../types";

export interface TableProps {
    rows: TableRow[];
}

/**
 * Table component
 *
 * @param rows
 * @constructor
 *
 * @return JSX.Element
 */
const Table: React.FC<TableProps> = ({rows}: TableProps): JSX.Element => {
    return (
        <table data-test="component-table" className="table table-hover">
            {
                rows.length ?
                    <TableHeader data-test="element-table-header" columns={Object.keys(rows[0].data)}/>
                    : null
            }
            <TableBody data-test="element-table-body" rows={rows}/>
        </table>
    );
};

export default Table;
