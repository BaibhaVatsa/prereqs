import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class Form extends React.Component {

    populateDepartmentList () {
        let list = []
        return list
    }

    populateClassList () {
        let list = []
        return list
    }

    render () {
        return <div>
            <select>
                {this.populateDepartmentList()}
            </select>
            <select>
                {this.populateClassList()}
            </select>
        </div>
    }

}

class Table extends React.Component {
    populateTable() {
        let table = []
        return table
    }

    render () {
        return <div>
            <table>
                {this.populateTable()}
            </table>
        </div>
    }
}

class Page extends React.Component {
    render () {
        return <div>
            <Form />
            <Table />
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<Page />, App);