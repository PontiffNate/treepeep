import React, {Component} from "react";
import CommentController from "./DatabaseControllers/CommentController";

export default class CommentForm extends Component {
    constructor() {
        super();
        this.submit = this.submit.bind(this);
      }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submit}>
                    <p class="leave-comm">Leave a Comment:</p>
                    <textarea name="comment-field" id="comment-form" type="textare"/>
                    <input type="submit" class="btn btn-success" value="Submit" />
                </form>
            </React.Fragment>
        );
    }

    submit(event) {
        event.preventDefault();
        console.log("here");
        const data = new FormData(event.target);
        console.log(data.get("comment-field"));
        var cc = new CommentController();
        cc.newComment(this.getTreePostID(), data.get('comment-field'));
    }

    getTreePostID() {
        var url = new URL(window.location.href);
        var id = url.searchParams.get("id");
        return parseInt(id);
    }
}