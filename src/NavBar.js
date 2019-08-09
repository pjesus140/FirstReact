import React, { Component } from 'react';
import MyForm from "./MyForm";

class NavBar extends Component {

    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">QAC</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    

                    <li className="nav-item">
                        <a className="nav-link" href="#"><button className="btn btn-warning">Log in</button></a>
                    </li>

                </ul>
            </div>
            <MyForm />
        </nav>
        )
    };
}
export default NavBar;