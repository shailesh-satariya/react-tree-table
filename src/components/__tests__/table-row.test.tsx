import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../test/utils";
import TableRow, {TableRowProps} from "../table-row";
import data from "../../data/data.json";
import {TableRow as TableRowType} from "../../types";

const rows: TableRowType[] = data as any as TableRowType[];
const row: TableRowType = rows[0];

const defaultProps: TableRowProps = {
    row: row,
    onRemove: () => {
    }
};

/**
 * Factory function to create a ShallowWrapper for the TableRow component.
 * @function setup
 *
 * @param {TableRowProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: TableRowProps = defaultProps): ShallowWrapper => {
    return shallow(<TableRow {...props}/>);
};

describe("render", () => {
    const wrapper: ShallowWrapper = setup();

    test("renders row element without an error", () => {
        const elementRow = findByTestAttr(wrapper, "element-row");

        expect(elementRow.length).toBe(1);
    });

    test("renders cell elements without an error", () => {
        const elementsHead = findByTestAttr(wrapper, "element-cell");

        expect(elementsHead.length).toBe(Object.keys(defaultProps.row.data).length + 2);
    });

    test("renders remove button without an error", () => {
        const buttonRemove = findByTestAttr(wrapper, "button-remove");

        expect(buttonRemove.length).toBe(1);
    });

    test("does not render child row element when state toggled is false", () => {
        const elementChildRow = findByTestAttr(wrapper, "element-child-row");

        expect(elementChildRow.length).toBe(0);
    });

    test("renders toggle button without an error when there are any kids", () => {
        const buttonToggle = findByTestAttr(wrapper, "button-toggle");

        expect(buttonToggle.length).toBe(1);
    });

    test("renders child row element when state toggled is true", () => {
        const buttonToggle = findByTestAttr(wrapper, "button-toggle");

        buttonToggle.simulate("click");

        const elementChildRow = findByTestAttr(wrapper, "element-child-row");

        expect(elementChildRow.length).toBe(1);
    });

    test("does not render toggle button without an error when there are no kids", () => {
        wrapper.setProps({row: rows[1]});
        const buttonToggle = findByTestAttr(wrapper, "button-toggle");

        expect(buttonToggle.length).toBe(0);
    });
});

describe("state controlled values value", () => {
    let wrapper: ShallowWrapper;
    const setState = jest.fn();

    beforeEach(() => {
        const useStateMock: any = (initState: any) => [initState, setState];
        jest.spyOn(React, "useState").mockImplementation(useStateMock);
        wrapper = setup();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("state values updates when toggle button clicked", () => {
        const buttonToggle = findByTestAttr(wrapper, "button-toggle");
        buttonToggle.simulate("click");
        expect(setState).toHaveBeenCalledWith(true);
    });
});