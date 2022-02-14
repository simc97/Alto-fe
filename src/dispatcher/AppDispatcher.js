var Dispatcher = require('flux').Dispatcher;

const AppDispatcher = new Dispatcher();

AppDispatcher.register(payload => {
    console.log('AppDispatcher: ', payload.action.type, payload.action);
});

export default AppDispatcher;
