import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../test/utils";
import App from "../App";


/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 *
 * @return {ShallowWrapper}
 */
const setup = (): ShallowWrapper => {
    return shallow(<App/>);
};

describe("renders component without errors", () => {
    test(`renders app component`, () => {
        const wrapper: ShallowWrapper = setup();
        const componentApp = findByTestAttr(wrapper, "component-app");

        expect(componentApp.length).toBe(1);
    });
});