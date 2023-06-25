import JSONDATA from "./JSONDATA.json";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [items, setItems] = useState(JSONDATA);
  // let newName = [];

  // newName = [...newName, ...name.split()];
  // console.log(newName);
  // return newName.sort();
 
  const handleSort = (column) => {
    const newDirection = column === sortColumn && sortDirection === 'asc'? 'desc' : 'asc';
    
    const sortedData = [...items].sort((a, b) => {
        console.log("column", column);

        if (a?.column < b?.column) {
          return newDirection === 'asc' ? -1 : 1;
        }
        if (a[column] > b[column]) {
          return newDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    
    setItems(sortedData);
    setSortColumn(column);
    setSortDirection(newDirection);
  
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name {sortColumn === 'name' && sortDirection === 'asc' ? '▲' : '▼'}</th>
            <th onClick={() => handleSort("address")}>Address {sortColumn === 'address' && sortDirection === 'asc' ? '▲' : '▼'}</th>
            <th onClick={() => handleSort("geo")}>GeoLocation {sortColumn === 'geo' && sortDirection === 'asc' ? '▲' : '▼'}</th>
          </tr>
        </thead>
        {items.map((val, id) => {
          return (
            <tbody key={id}>
              <tr>
                <td>{val.name}</td>
                <td>{val.address?.city}</td>
                <td>{val.address?.geo?.lat}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
