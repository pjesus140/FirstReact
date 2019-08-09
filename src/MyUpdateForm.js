import React, { Component } from 'react';
import DataService from "./DataService";

class MyUpdateForm extends Component {


    newinfofuction() {

        var info = document.getElementsByClassName("input");
        var newInfo = {};
        for (let i = 0; i < info.length - 1; i++) {
            newInfo[info[i].id] = info[i].value;
        };
        return newInfo;
    }




    render() {
        var theid = document.getElementById("id");
        return (<div>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateModal">
                Update 
</button>


            <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">enter new info</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Choose existing id</label>
                                    <input type="text" className="form-control" id="id" aria-describedby="emailHelp" />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">new Name</label>
                                    <input type="text" className="input form-control" id="traineename" aria-describedby="emailHelp" />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">new City</label>
                                    <input type="text" className="input form-control" id="traineecity" />
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={() => {


                                    DataService.updateRecord(theid.value, this.newinfofuction());
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
export default MyUpdateForm;