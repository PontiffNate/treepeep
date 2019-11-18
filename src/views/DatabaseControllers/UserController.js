import config from "./config";
import React, {Component} from "react";
// const {google} = require('googleapis');




export default class UserController{


    url = "https://content-sheets.googleapis.com/v4/spreadsheets/" + config.userSpreadsheetId + "/values/Sheet1!B2%3AC3000?key=" + config.api_key;
    userData;
    constructor(props) {
        console.log(this.url);
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", this.url, false);
        xhReq.send(null);
        this.userData = JSON.parse(xhReq.responseText);
    }


    getUserByID(id) {
        var found = null;
        for (var i = 0; i < this.userData.values.length; i++) {
            if (this.userData.values[i][0] == id.toString()) {
                found = this.userData.values[i];
                break;
            }
        }
        return this.mapUserArrayToJSON(found);
        
    }

    mapUserArrayToJSON(arr) {
        var fin = {
            "ID": parseInt(arr[0]),
            "NAME": arr[1]
        };
        return fin;

    }



    newTree(name, image_url, coordinates, description, likes, species, height, author_id) {
    
    }

}