import { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

export default PhoneDirectory;