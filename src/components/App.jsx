import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar.jsx';

//Store
import TripDetailStore from '../stores/TripDetailStore';

//Components
import Home from './Home.jsx';
import NewTrip from './NewTrip.jsx';
import Trip from './Trip.jsx';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mission: TripDetailStore.getMission()
    };
    this.binds = {
      updateState: () => {
        console.log('UPDATE')
        this.setState({
            mission: TripDetailStore.getMission()
        })
      }
    };
  }

  componentDidMount(){
    TripDetailStore.on('change', this.binds.updateState);
  }

  componentWillUnmount(){
      TripDetailStore.removeListener('change', this.binds.updateState)
  }


  render(){
    const { mission } = this.state; 
    return(
      <div id="app-container">
        <>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-trip" element={<NewTrip/>} />
            <Route path="/trip-details" element={<Trip data={mission} />} />
          </Routes>
        </>
      </div>
    )
  }
}

export default App;
