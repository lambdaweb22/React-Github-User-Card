import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: ''
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
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard user={this.state.user}/>
      </div>
    );
  }
}

export default App;
