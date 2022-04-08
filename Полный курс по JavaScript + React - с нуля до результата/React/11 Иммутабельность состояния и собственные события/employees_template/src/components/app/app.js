import { Component } from "react";
// import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Ivan C.", salary: 1502, increase: false, id: 1 },
        { name: "Gordon F.", salary: 5000, increase: true, id: 2 },
        { name: "Bogdanov D.", salary: 15000, increase: false, id: 3 },
        { name: "Alice S.", salary: 4300, increase: true, id: 4 },
        { name: "Sofia D.", salary: 3300, increase: true, id: 5 },
      ],
    };
    this.maxId = this.state.data.length;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);
      // первый вариант иммутабельности
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after];
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    if (name && salary) {
      this.maxId += 1;
      // this.maxId = nextId();
      const newEmployee = { name, salary, increase: false, id: this.maxId };
      this.setState(({ data }) => {
        return {
          data: [...data, newEmployee],
        };
      });
    }
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
