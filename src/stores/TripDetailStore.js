import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import moment from 'moment';

let missionJSON = require('../assets/data/mission.json');

var storage = { 
    mission: missionJSON // this is mock data, ideally we would call the api to set this value
};


var TripDetailStore = Object.assign({}, EventEmitter.prototype, {
    
    getMission: () => storage.mission,
    getTrip: () => storage.mission.trip,
    getDriver: () => storage.mission.driver,
    getVehicle: () => storage.mission.vehicle,
    getVibe: () => storage.mission.vibe,


    dispatcherId: AppDispatcher.register(payload => {
        var action = payload.action;
    
        switch(action.type) {
            case 'SET_MISSION_DATA':
                _transformData();
                TripDetailStore.emit('change');
                break;
            default:
                return null;
        }
    })
});

const _transformData = () => {
    storage.mission.trip.estimated_arrival = moment(storage.mission.trip.estimated_arrival).format('h:mm A')
};

export default TripDetailStore;