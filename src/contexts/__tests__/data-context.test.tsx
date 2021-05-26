import React from "react";
import {shallow} from "enzyme";

import {DataProvider, useData} from "../data-context";

// a functional component that calls useData for our tests
const FunctionalComponent = () => {
    useData();
    return <div/>;
};

test("useData throws error when not wrapped in DataProvider", () => {
    expect(() => {
        shallow(<FunctionalComponent/>);
    }).toThrow("useData must be used within a DataProvider");
});

test("useData does not throw error when wrapped in DataProvider", () => {
    expect(() => {
        shallow(
            <DataProvider>
                <FunctionalComponent/>
            </DataProvider>
        );
    }).not.toThrow();
});
