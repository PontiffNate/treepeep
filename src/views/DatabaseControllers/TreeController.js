import config from "./config";
import React, {Component} from "react";
// const {google} = require('googleapis');




export default class TreeController{


    url = "https://content-sheets.googleapis.com/v4/spreadsheets/" + config.treeSpreadsheetId + "/values/Sheet1!B2%3AJ300?key=" + config.api_key;
    treeData;
    constructor(props) {
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", this.url, false);
        xhReq.send(null);
        this.treeData = JSON.parse(xhReq.responseText);
    }


    getTreeByID(id) {
        var found = null;
        for (var i = 0; i < this.treeData.values.length; i++) {
            if (this.treeData.values[i][0] == id.toString()) {
                found = this.treeData.values[i];
                break;
            }
        }
        return this.mapTreeArrayToJSON(found);
        
    }

    mapTreeArrayToJSON(arr) {
        var coor = arr[3].split(",");
        var fin = {
            "ID": parseInt(arr[0]),
            "NAME": arr[1],
            "IMAGE_URL": arr[2],
            "COORDINATES": [parseFloat(coor[0]), parseFloat(coor[1])],
            "DESCRIPTION": arr[4],
            "LIKES": parseInt(arr[5]),
            "SPECIES": arr[6],
            "HEIGHT": arr[7],
            "AUTHOR_ID": parseInt(arr[8])
        };
        return fin;

    }



    newTree(name, image_url, coordinates, description, likes, species, height, author_id) {
    
    }

    // getNextID() {
    //     var fin = 0;
    //     for (var i = 0; i < treeData.trees.length; i++) {
    //         if (treeData.trees[i].ID > fin) {
    //             fin = treeData.trees[i].ID;
    //         }
    //     }
    //     return fin + 1;
    // }


}