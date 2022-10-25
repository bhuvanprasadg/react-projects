import React, { Component } from 'react';

export class BookForm extends Component {
    constructor(){
        super();
        this.state = {
            title:"",
            author:""
        };
    }
    setTitle(e){
        this.setState({title: e.target.value});
    }
    setAuthor(e){
        this.setState({author: e.target.value});
    }
    addBook = (e) =>{
        e.preventDefault();
        this.props.addBook(this.state.title, this.state.author);
        this.setState({title:"", author:""});
    }
    render() {
        return (
        <form onSubmit={this.addBook}>
            <label>Title:<input type="text" onChange={e => this.setTitle(e)} value={this.state.title}/></label>
            <label>Author:<input type="text" onChange={e => this.setAuthor(e)} value={this.state.author}/></label>
            <button type='submit'>Add Book</button>
        </form>
        );
    }
}

export default BookForm;