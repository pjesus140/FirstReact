import React, { Component } from 'react';
import DataService from "./DataService";

class MyForm extends Component {




    render() {
        var theName = document.getElementById("name");
        var theCity = document.getElementById("city");
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add entry
</button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Enter info</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">City</label>
                                        <input type="text" className="form-control" id="city" />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={() => {


                                        DataService.createRecord(theName.value, theCity.value)


                                    }}>Submit</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        )
    };
}
export default MyForm;