import React, { Component } from 'react';
import { withRouter } from "react-router";
class Product extends Component {
constructor(){
    super();
    this.state={
        products : []
    }
}
    onAddSubmit(event){
        event.preventDefault();

        let title = event.target['title'].value;
        let content = event.target['content'].value;

        let post = {
            title:title,
            content:content
        }

        let postInJson = JSON.stringify(post);
        console.log(postInJson);

        fetch("http://127.0.0.1:8000/api/posts", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: postInJson
        })
        .then((response) => {
            console.log(response);
            // this.props.history.push("/posts");
        });
    }
render() {
    return (
        <div>
            <div className="container">
                <h1>Add a post</h1>
                    <div className="col-sm-6" >
                    <form onSubmit={this.onAddSubmit} >
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" name="title" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Content </label>
                        <input type="text" name="content" class="form-control"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                <br></br>
            </div>
        </div>
    );
    }
}

export default Product;