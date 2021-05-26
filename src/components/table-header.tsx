import React from "react";

export interface TableHeaderProps {
    columns: string[];
}

/**
 * TableHeader component
 *
 * @param data
 * @constructor
 *
 * @return JSX.Element
 */
const TableHeader: React.FC<TableHeaderProps> = ({columns}: TableHeaderProps): JSX.Element => {
    return (
        <thead className="thead-light" data-test="component-table-header">
            <tr data-test="element-row">
                <th data-test="element-head">&nbsp;</th>
                {columns.map(column => (
                    <th
                        data-test="element-head"
                        key={column}
                        className="text-nowrap font-weight-normal align-middle p-1"
                    >
                        {column}
                    </th>
                ))}
                <th data-test="element-head">&nbsp;</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
