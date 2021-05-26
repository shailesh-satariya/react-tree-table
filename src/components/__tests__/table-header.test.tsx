import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../test/utils";
import TableHeader, {TableHeaderProps} from "../table-header";
import data from "../../data/data.json";

const columns: string[] = Object.keys(data[0].data);

const defaultProps: TableHeaderProps = {
    columns: columns
};

/**
 * Factory function to create a ShallowWrapper for the TableHeader component.
 * @function setup
 *
 * @param {TableHeaderProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: TableHeaderProps = defaultProps): ShallowWrapper => {
    return shallow(<TableHeader {...props}/>);
};

describe("render", () => {
    const wrapper: ShallowWrapper = setup();

    test("renders component without an error", () => {
        const componentTableHeader = findByTestAttr(wrapper, "component-table-header");

        expect(componentTableHeader.length).toBe(1);
    });

    test("renders row element without an error", () => {
        const elementRow = findByTestAttr(wrapper, "element-row");

        expect(elementRow.length).toBe(1);
    });

    test("renders head elements without an error", () => {
        const elementsHead = findByTestAttr(wrapper, "element-head");

        expect(elementsHead.length).toBe(defaultProps.columns.length + 2);
    });
});