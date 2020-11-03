import React, { Component } from "react"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <nav class="zone pink sticky">
        <ul class="main-nav">
            <li><a href="">Vuelos</a></li>
            <li><a href="">Cruceros</a></li>
            <li><a href="">Hoteles</a></li>
            <li><a href="">Ofertas</a></li>
            <li class="push"><a href="">Quienes somos</a></li>
        </ul>
    </nav>
    )
  }
}

export default App
