import React from "react";
import Table from "../components/table";
import {useData} from "../contexts/data-context";

/**
 * Main page component
 *
 * @constructor
 *
 * @return JSX.Element
 */
const Main: React.FC = (): JSX.Element => {
    const [data] = useData();

    return (
        <Table data-test="component-table-main" rows={data}/>
    );
};

export default Main;