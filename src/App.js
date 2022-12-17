
import './App.css';
import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      advice: ''
    }
  }

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        // following line can also be written in a destructuring way like
        //console.log(response.data.slip.advice)
        const { advice } = response.data.slip
        //the following line can be written also as
        //this.setState({advice : advice})
        this.setState({ advice })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentWillUnmount() {
    console.log("unmounting", this.fetchAdvice)
  }
  render() {
    const { advice } = this.state;
    //OR in return it can be written as this.state.advice
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={() => { this.fetchAdvice() }}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App
