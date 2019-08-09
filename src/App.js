
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataService from "./DataService";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import MyForm from "./MyForm";
import MyUpdateForm from "./MyUpdateForm";



class App extends Component {

  constructor() {
    super()
    this.state = {
      records: []
    }

    let promise = DataService.retrieveShowAllRecords();
    promise.then(response => {
      this.setState({
        records: response.data
      })

    })

  }

  render() {

    return (

      <div>
        <NavBar />
        <div className="container">


          <h1>QA Consulting , Students Information System</h1>


          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {

                this.state.records.map((record, i) => {


                  return (
                    <tr key={"A" + i}>
                      <td> {record.traineeid}</td>
                      <td> {record.traineename}</td>
                      
                      <td><button className="btn btn-warning" onClick={() => {
                        DataService.deleteRecord(record.traineeid).then(() => {
                          let promise = DataService.retrieveShowAllRecords();
                          promise.then(response => {
                            this.setState({
                              records: response.data
                            })

                          })

                        })

                      }}> Delete</button> </td>

                    </tr>
                  )
                })
              }
            </tbody>



          </table>
          <MyUpdateForm />
 

        </div>
      </div>

    )
  };

}

export default App;
