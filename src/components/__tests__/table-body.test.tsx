import {mount, ReactWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../test/utils";
import TableBody, {TableBodyProps} from "../table-body";
import data from "../../data/data.json";
import {TableRow} from "../../types";
import {DataProvider} from "../../contexts/data-context";

const rows: TableRow[] = data as any as TableRow[];

const defaultProps: TableBodyProps = {
    rows: rows
};

/**
 * Factory function to create a ReactWrapper for the TableBody component.
 * @function setup
 *
 * @param {TableBodyProps} props
 *
 * @return {ReactWrapper}
 */
const setup = (props: TableBodyProps = defaultProps): ReactWrapper => {
    return mount(<DataProvider><TableBody {...props}/></DataProvider>);
};

describe("render", () => {
    const wrapper: ReactWrapper = setup();

    test("renders component without an error", () => {
        const componentTableBody = findByTestAttr(wrapper, "component-table-body");

        expect(componentTableBody.length).toBe(1);
    });

    test("renders TableRow component without an error", () => {
        const componentTableRow = findByTestAttr(wrapper, "component-table-row");

        expect(componentTableRow.length).toBe(defaultProps.rows.length);
    });
});

describe("state controlled values value", () => {
    let wrapper: ReactWrapper;
    const setState = jest.fn();

    beforeEach(() => {
        const useStateMock: any = (initState: any) => [initState, setState];
        jest.spyOn(React, "useState").mockImplementation(useStateMock);
        wrapper = setup();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("state values updates when TableRow component onRemove called", () => {
        const copyRows = [...rows];
        const index: number = 1;
        const componentTableRow = findByTestAttr(wrapper, "component-table-row");
        (componentTableRow.at(index).prop("onRemove") as Function)();
        copyRows.splice(index, 1);
        expect(setState).toHaveBeenCalledWith(copyRows);
    });
});