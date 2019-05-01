import React, {Component} from 'react';
import Quotation from "../components/Quotation";
import axios from 'axios';
import Form from "../components/Form";
export default class Quotations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            newMessage: "",
            newAuthor: "",
        };
    }

    async componentDidMount() {
        const quotes = (await axios.get('http://localhost:8081/quotes')).data;
        this.setState({
            quotes
        });
    }

    async insertQuote(quote) {
        const quotes = (await axios.post('http://localhost:8081/quote', quote)).data;
        this.setState({
            quotes
        });
    }

    removeQuote = async (index) => {
        const quotes = (await axios.delete('http://localhost:8081/quote/'+index)).data;
        this.setState({
            quotes
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newMessage) return;
        this.insertQuote({
            message: this.state.newMessage,
            author: this.state.newAuthor === "" ? "anonymous" : this.state.newAuthor
        });
    }

    handleNewQuote(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    render() {
        if (!this.state.quotes) {
            return (<p>loading data....</p>)
        }
        return (
            <div>
                <ul>
                    {this.state.quotes.map(q => <Quotation key={q._id} {...q} removeQuote={this.removeQuote}/>)}
                </ul>
                <hr/>
                <Form handleSubmit={e => this.handleSubmit(e)} handleNewQuote={e => this.handleNewQuote(e)}/>
            </div>
        )
    }
}
