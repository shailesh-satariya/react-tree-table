import React from 'react';
import {DataProvider} from "./contexts/data-context";
import Main from "./pages/main";

function App() {
  return (
    <div className="container-fluid p-2" data-test="component-app">
      <DataProvider>
          <Main/>
      </DataProvider>
    </div>
  );
}

export default App;
