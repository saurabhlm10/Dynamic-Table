import "./App.css";
import TableComponent from "./Components/TableComponent";
import './tableTestData.json'

function App() {
  let tableData = require("./tableTestData.json");
  let tableConfig1 = require('./tableConfig1.json')
  let tableConfig2 = require('./tableConfig2.json')
  let tableConfig3 = require('./tableConfig3.json')
  let tableConfig4 = require('./tableConfig4.json')

  return (
    <>
      <div id="container">
        <TableComponent data={tableData} tableConfig={tableConfig1}/>
        <TableComponent data={tableData} tableConfig={tableConfig2}/> 
        <TableComponent data={tableData} tableConfig={tableConfig3}/>
        <TableComponent data={tableData} tableConfig={tableConfig4}/>
      </div>
    </>
  );
}

export default App;
