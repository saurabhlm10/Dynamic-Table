import "./App.css";
import TableComponent from "./Components/TableComponent";
import './tableTestData.json'

function App() {
  let tableData = require("./tableTestData.json");
  return (
    <>
      <div id="container">
        <TableComponent data={tableData}/> 
      </div>
    </>
  );
}

export default App;
