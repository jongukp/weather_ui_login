import React from "react";
import axios from 'axios'

class LoggedIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            city:"",
            state:"",
            lat:"",
            long:"",
            latitude:[],
            longitude:[],
            response:[]
        };
    }

    updateLatitude = e => {
        const {
            target: {value}
        } = e;
        this.setState({ latitude: value });
    };
    updateLongitude = e => {
        const {
            target: {value}
        } = e;
        this.setState({ longitude: value });
    };
    submitForm = e => {
        e.preventDefault();
        console.log(this.state.latitude, this.state.longitude);
        axios.get("https://api.weather.gov/points/" + this.state.latitude + "," + this.state.longitude)
            .then(response => {
                console.log(response);
                this.setState({ city: JSON.stringify(response.data['properties']['relativeLocation']['properties']['city']) });
                this.setState({ state: JSON.stringify(response.data['properties']['relativeLocation']['properties']['state']) });
                this.setState({ lat: JSON.stringify(response.data['properties']['relativeLocation']['geometry']['coordinates'][1]) });
                this.setState({ long: JSON.stringify(response.data['properties']['relativeLocation']['geometry']['coordinates'][0]) });
                // return response.data
            })
            .catch(err => console.log(err))
    };


    render() {
        return (
            <form onSubmit={this.submitForm}>
                <span>Success</span>
                <input
                    type="text"
                    name="Latitude"
                    value={this.latitude}
                    onChange={this.updateLatitude}
                    placeholder={"Latitude"}
                />
                <input
                    type="text"
                    name="Longitude"
                    value={this.longitude}
                    onChange={this.updateLongitude}
                    placeholder={"Longitude"}
                />
                <input type="submit"/>
                <ul>
                    <li>
                        CITY: {this.state.city}
                    </li>
                    <li>
                        STATE: {this.state.state}
                    </li>
                    <li>
                        LATITUDE.: {this.state.lat}
                    </li>
                    <li>
                        LONGITUDE: {this.state.long}
                    </li>
                </ul>
            </form>
        );
    }
}
// ['properties']['relativeLocation']['properties']
// 39.7456-97.0892



export default LoggedIn;