import {mount, ReactWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../test/utils";
import Main from "../main";
import {DataProvider} from "../../contexts/data-context";


/**
 * Factory function to create a ShallowWrapper for the Main component.
 * @function setup
 *
 * @return {ReactWrapper}
 */
const setup = (): ReactWrapper => {
    return mount(
        <DataProvider>
            <Main/>
        </DataProvider>
    );
};

describe("renders component without errors", () => {
    test(`renders table component`, () => {
        const wrapper: ReactWrapper = setup();
        const componentTableMain = findByTestAttr(wrapper, "component-table-main");

        expect(componentTableMain.length).toBe(1);
    });
});