import config from "./config";
import React, {Component} from "react";
// const {google} = require('googleapis');




export default class CommentController{


    url = "https://content-sheets.googleapis.com/v4/spreadsheets/" + config.commentSpreadsheetId + "/values/Sheet1!B2%3AE3000?key=" + config.api_key;
    commentData;
    constructor(props) {
        console.log(this.url);
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", this.url, false);
        xhReq.send(null);
        this.commentData = JSON.parse(xhReq.responseText);
    }


    getCommentsByTreeID(id) {
        var found = [];
        for (var i = 0; i < this.commentData.values.length; i++) {
       
            if (this.commentData.values[i][2] == id.toString()) {
                
                found = found.concat([this.commentData.values[i]]);
            }
        }
        var fin = [];
        for (var i = 0; i < found.length; i++) {
            fin.push(this.mapCommentArrayToJSON(found[i]));
        }
    
        return fin;
        
    }

    mapCommentArrayToJSON(arr) {
        var fin = {
            "ID": parseInt(arr[0]),
            "COMMENT": arr[1],
            "TREE_ID": parseInt(arr[2]),
            "AUTHOR_ID": parseInt(arr[3])
        };
        return fin;

    }



    newComment(treeID, commentText, authorID=1) {
        var highest = 0;
        for (var i = 0; i < this.commentData.values.length; i++) {
            if (parseInt(this.commentData.values[i][0]) > highest) {
                highest = parseInt(this.commentData.values[i][0]);
            }
        }
        var spreadSheetRange = "Sheet1!A" + (this.commentData.values.length + 2) + ":B" + (this.commentData.values.length + 2);
        console.log(spreadSheetRange);
        var params = {
            "range": spreadSheetRange,
            "majorDimension": "ROWS",
            "values": [
                highest,
                commentText,
                treeID,
                authorID
            ]
        };
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', "https://sheets.googleapis.com/v4/spreadsheets/" + config.commentSpreadsheetId + "/values/" + spreadSheetRange + "?key=" + config.api_key);
        xhr.setRequestHeader('Authorization', "EJQmd3r91elJNF0723x2IyOF");
        xhr.send(JSON.stringify(params));

    }

}