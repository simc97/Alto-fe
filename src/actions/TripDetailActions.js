import AppDispatcher from '../dispatcher/AppDispatcher';

var TripDetailActions = {
    
    getMissionData: function(){
        //ideally, call the api to get the data here
        TripDetailActions.dispatch('SET_MISSION_DATA');
    },
    
    dispatch: function(actionType, actionPayload) {
        AppDispatcher.dispatch({
            action: {
                type: actionType,
                payload: actionPayload
            }
        });
    }
};

export default TripDetailActions;