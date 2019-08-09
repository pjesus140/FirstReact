import React, {Component} from 'react';
import axios from 'axios';


class DataService{
    retrieveShowAllRecords(){
        return axios.get(`http://localhost:8080/trainee/showall`)
    }
    deleteRecord(id){
        return axios.delete(`http://localhost:8080/trainee/delete/${id}`)
    }

    createRecord(name,city){
        return axios.post(`http://localhost:8080/trainee/create1/${name}/${city}`)
    }

    updateRecord(id,newInfo){
        return axios.post(`http://localhost:8080/trainee/update/${id}`,newInfo)
    }
}
export default new DataService();