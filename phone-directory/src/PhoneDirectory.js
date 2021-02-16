import { useState } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function PhoneDirectory() {
    const [state, setState] = useState({
        subscribersList: [
            {
                id: 1,
                name : "Prahalad",
                phone: "123456"
            },
            {
                id: 2,
                name: "Rekha",
                phone: "11111"
            }
        ]
    });

    const addSubscriberHandler = (newSubscriber) => {
        let subscribersList = state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        setState({ subscribersList: subscribersList });
    }

    const deleteSubscriberHandler = (subscriberId) => {
        let subscriberList = state.subscribersList;
        let subscriberIndex = 0 ;
        subscriberList.forEach(function(subscriber, index) {
            if(subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        });
        let newSubscriberList = subscriberList;
        newSubscriberList.splice(subscriberIndex, 1);
        setState({subscribersList: newSubscriberList});
    }

    return (
        <Router>
                <Route exact path='/' render={(props) => <ShowSubscribers {...props}
                                                                          subscribersList={state.subscribersList}
                                                                          deleteSubscriberHandler={deleteSubscriberHandler}
                /> } />
                <Route exact path='/add' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={addSubscriberHandler} /> } />
        </Router>
    );
}

/*
class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name : "Prahalad",
                    phone: "123456"
                },
                {
                    id: 2,
                    name: "Rekha",
                    phone: "11111"
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscriberList = this.state.subscribersList;
        let subscriberIndex = 0 ;
        subscriberList.forEach(function(subscriber, index) {
            if(subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this)
        let newSubscriberList = subscriberList;
        newSubscriberList.splice(subscriberIndex, 1);
        this.setState({subscribersList: newSubscriberList});
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' render={(props) => <ShowSubscribers {...props} 
                        subscribersList={this.state.subscribersList} 
                        deleteSubscriberHandler={this.deleteSubscriberHandler}
                        /> } /> 
                    <Route exact path='/add' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} /> } /> 
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;*/
