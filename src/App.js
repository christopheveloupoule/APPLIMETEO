import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather'

const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167";

class App extends React.Component {
  

getWeather = async (e) => {
  e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API_KEY}");
    const result_api = await api_call.json();
    console.log(result_api);
  }

  render() { 
    return ( 
      <div>
        <Titles />
        <Form result_meteo={this.getWeather} />
        
      </div>
     );
  }
}
 
export default App ;