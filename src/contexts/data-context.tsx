import React, {Dispatch, ProviderProps, SetStateAction} from "react";
import {TableRow} from "../types";
import data from "../data/data.json";


const initData: TableRow[] = data as any as TableRow[];
const dataContext = React.createContext(null);

/**
 * @function useData
 * @returns {Array} dataContext value, which is a state of [value, setter].
 *
 */
export const useData: () => [TableRow[], Dispatch<SetStateAction<TableRow[]>>] =
    () => {
        // useContext is a hook that returns the context value
        // In this case, the context value is an [value, setter] array for the context state
        // useContext also subscribes to changes, and will update any time the context value updates
        //     we've memoized this so that it will only update when the data value updates
        const context = React.useContext(dataContext);

        // throw an error if the context doesn't exist -- means we aren't in a provider
        if (!context) {
            throw new Error("useData must be used within a DataProvider");
        }

        // otherwise return the context
        return context as any as [TableRow[], Dispatch<SetStateAction<TableRow[]>>];
    };

/**
 * @function DataProvider
 * @param {object} props - props to pass through from declared component
 * @returns {JSX.Element} Provider component
 */
export const DataProvider = (props: Partial<ProviderProps<any>>) => {
    // create state that will be used within the provider
    // initial state value is DataProvider
    const [data, setData] = React.useState(initData);

    // value for the context provider will be array of [value, setter] for data state
    // useMemo just ensures that the provider value will only update when data updates
    // No need to test this -- React tests useMemo for us!
    const value = React.useMemo(() => [data, setData], [data, setData]);

    // Return a Provider component with the [value, setter] array as the value, passing through the props
    return <dataContext.Provider value={value} {...props} />;
};

const contextExport = {DataProvider, useData};

export default contextExport;