import JSONDATA from "./JSONDATA.json";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);
  const [sortedField, setSortedField] = useState(null);
  const [items, setItems] = useState([]);
  // let newName = [];

  // newName = [...newName, ...name.split()];
  // console.log(newName);
  // return newName.sort();
  useEffect(() => {
    setItems(JSONDATA);
  });

  if (sortedField !== null) {
    items.sort((a, b) => {
      console.log("a :", a);
      console.log("b :", b);
      if (a.name < b.name)  {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th onClick={() => setSortedField("name")}>Name</th>
            <th>Address</th>
            <th>GeoLocation</th>
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
