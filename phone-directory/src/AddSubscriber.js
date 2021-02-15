import React, {useState} from 'react'
import Header from './Header'
import './AddSubscriber.css'
import { Link } from 'react-router-dom';

export default function AddSusbscriber(props) {
    const [state, setState] = useState({
        id: 0,
        name: '',
        phone: ''
    });

    const inputChangedHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const onFormSubmitted = (e) => {
        e.preventDefault();
        props.addSubscriberHandler(state)
        setState({id: 0, name: '', phone: ''});
        props.history.push("/");
    }

    return (
        <div className="component-container">
            <Header heading="Add Subscriber" />
            <div className="component-body-container">
                <Link to='/'><button className="custom-btn">Back</button></Link>
                <form className="subscriber-form" onSubmit={onFormSubmitted}>
                    <label htmlFor="name" className="label-contol">Name: </label> <br/>
                    <input id="name" type="text" className="input-control" name="name" onChange={inputChangedHandler}/> <br/> <br/>
                    <label htmlFor="phone" className="label-contol">Phone: </label> <br/>
                    <input id="phone" type="text" className="input-control" name="phone" onChange={inputChangedHandler}/> <br/> <br/>
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subsciber to be added: </span> <br/>
                        <span className="subscriber-info">Name: {state.name} </span> <br />
                        <span className="subscriber-info">Phone: {state.phone} </span>
                    </div>
                    <button type="submit" className="custom-btn add-btn">Add </button>
                </form>
            </div>
        </div>
    );
}

/*
class AddSusbscriber extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state)
        this.setState({id: 0, name: '', phone: ''})
        this.props.history.push("/");
    }

    render() {
        const {name, phone} = this.state;
        return (
            <div className="component-container">
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                    <Link to='/'><button className="custom-btn">Back</button></Link>
                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-contol">Name: </label> <br/>
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}/> <br/> <br/>
                        <label htmlFor="phone" className="label-contol">Phone: </label> <br/>
                        <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}/> <br/> <br/>
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subsciber to be added: </span> <br/>
                            <span className="subscriber-info">Name: {name} </span> <br />
                            <span className="subscriber-info">Phone: {phone} </span>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSusbscriber;*/
