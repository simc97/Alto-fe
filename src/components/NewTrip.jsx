import React from 'react';

//Components
import TextInput from './TextInput';

//Store
import TripDetailStore from '../stores/TripDetailStore';

//Action
import TripDetailActions from '../actions/TripDetailActions';

class NewTrip extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            trip: TripDetailStore.getTrip()
        };
        this.binds = {
            updateState: () => {
                this.setState({
                    trip: TripDetailStore.getTrip()
                })
            },
            handleClick: this.handleClick.bind(this)
        }
    }

    componentDidMount(){
        TripDetailStore.on('change', this.binds.updateState);
        TripDetailActions.getMissionData();
    }

    componentWillUnmount(){
        TripDetailStore.removeListener('change', this.binds.updateState)
    }

    handleClick() {
        window.location.href='/trip-details'; // history.push is not working...this needs to be debugged
    }

    render() {
        const { trip } = this.state;
        const { handleClick } = this.binds;

        return(
            <div className="new-trip-container">
                <div className="new-trip-header">
                    <h2 className="header">Where to?</h2>
                </div>
                <div className="new-trip-content-container w-100">
                    {/* get text input working if time permits  */}
                    <TextInput 
                        title="Where from" 
                        inputTerm={trip.pickup_location.street_line1}
                        placeholder="Pickup location"
                    />
                    <TextInput 
                        title="Where to" 
                        inputTerm={trip.dropoff_location.name}
                        placeholder="Dropoff location" 
                    />
                </div>
                {trip.dropoff_location && trip.pickup_location && <div className="button-container w-100">
                    <button className="filled-button" onClick={() => handleClick()}>Confirm</button>
                </div>}

            </div>
        )  
    } 
}

export default NewTrip;