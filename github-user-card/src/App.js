import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
      followers: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/kastair')
      .then(res => {
        this.setState({
          user: res.data
        })
        console.log(this.state.user);
      })
      .catch(err => {
        console.error('error', err);
      })
    axios
      .get('https://api.github.com/users/kastair/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })
        console.log(this.state.followers);
      })
      .catch(err => {
        console.error('error', err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard user={this.state.user} followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
