import React from "react";
import {TableRow as TableRowType} from "../types";
import Table from "./table";
import {getId} from "../utils";

export interface TableRowProps {
    row: TableRowType;
    onRemove: () => void;
}

/**
 *
 * @param row
 * @param onRemove
 * @constructor
 *
 * @return JSX.Element
 */
const TableRow: React.FC<TableRowProps> = ({row, onRemove}: TableRowProps): JSX.Element => {
    const [opened, setOpened] = React.useState(false);
    const {data, kids}: TableRowType = row;
    const columns: string[] = Object.keys(data);
    const kidsProps: string[] = Object.keys(kids).filter( (prop: string) => kids[prop].records.length );
    const id: string = getId(row);

    return (
        <React.Fragment>
            <tr data-test="element-row">
                <td data-test="element-cell">
                    {
                        kidsProps.length ?
                            <button data-test="button-toggle"
                                    onClick={() => setOpened(!opened)}>{opened ? "ᐯ" : "ᐳ"}</button>
                            :
                            null
                    }
                </td>
                {columns.map((column: string, index: number) => (
                    <td data-test="element-cell"
                        key={`${id}-${index}-cell`}>
                        {data[column]}
                    </td>
                ))}
                <td data-test="element-cell" className="text-right">
                    <button data-test="button-remove" onClick={onRemove} className="text-muted">✖</button>
                </td>
            </tr>
            {
                opened ?
                    kidsProps.map((prop: string, index: number) => (
                        <tr key={`${id}-${index}-row`} data-test="element-child-row" className="child-row">
                            <td colSpan={columns.length + 2} className="pr-0 pl-5">
                                <label>{prop.toUpperCase()}</label>
                                <Table rows={kids[prop].records}/>
                            </td>
                        </tr>
                    )) :
                    null
            }

        </React.Fragment>
    );
};

export default TableRow;
