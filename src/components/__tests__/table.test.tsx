import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../test/utils";
import Table, {TableProps} from "../table";
import data from "../../data/data.json";
import {TableRow} from "../../types";

const defaultProps: TableProps = {
    rows: data as any as TableRow[]
};

/**
 * Factory function to create a ShallowWrapper for the Table component.
 * @function setup
 *
 * @param {TableProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: TableProps = defaultProps): ShallowWrapper => {
    return shallow(<Table {...props}/>);
};

describe("render", () => {
    const wrapper: ShallowWrapper = setup();

    test("renders component without an error", () => {
        const componentTable = findByTestAttr(wrapper, "component-table");

        expect(componentTable.length).toBe(1);
    });

    test("renders table header element without an error", () => {
        const elementTableHeader = findByTestAttr(wrapper, "element-table-header");

        expect(elementTableHeader.length).toBe(1);
    });

    test("renders table body element without an error", () => {
        const elementsTableBody = findByTestAttr(wrapper, "element-table-body");

        expect(elementsTableBody.length).toBe(1);
    });
});