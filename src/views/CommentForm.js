import React, {Component} from "react";

export default class TreePost extends Component {
    render() {
        return (
            <React.Fragment>
                <p class="leave-comm">Leave a Comment:</p>
                <textarea id="comment-form" type="textare"/>
                <button type="button" class="btn btn-success">Submit</button>
            </React.Fragment>
        );
    }
}