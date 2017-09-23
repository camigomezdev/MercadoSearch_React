import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'semantic-ui-react'
import { Container, Divider, Grid } from 'semantic-ui-react'

import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'

import logo from './logo.svg';
import './App.css';
import Items from './components/Items/Items'

const url = 'https://api.mercadolibre.com/sites/MCO/'

const data = [{title: "Camila"}]

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
        items: []
      }
      this.getInit()
  }

  callApi = (urlSerach) => {
    axios.get(urlSerach).then( (response) => {
      this.setState({items: response.data.results})
      console.log(this.items)
      console.log(response.data.results)
    })
  }

  getInit = (event) => {
    var urlSerach = url + "search?q=" +  "Camara reflex"
    this.callApi(urlSerach)
  }

  getData = (event) => {
    var buscar = event.target.value
    buscar = buscar=="" ? "Camara reflex" : buscar
    var urlSerach = url + "search?q=" + buscar
    this.callApi(urlSerach)
  }

  addToState = (event) => {
    if (event.type === "click" || event.key === "Enter") {
      this.setState(prevState => { return {
        text: '',
        todos: prevState.todos.concat(this.state.text)}
      })
    }
  }

  render() {
    return (
        <div>
          <Menu attached='top' inverted color="teal" className="App-header">
            <h1 className="App-color-text"> <i className='shopping basket icon'/> Mercado Libre Search @camigomez35</h1>
            <div className='ui right aligned search item'>
              <div className='ui icon input'>
                  <input type='text' placeholder='Search...'
                    value={this.state.inputTexto} onChange={this.getData}/>
                  <i className='search link icon'/>
              </div>
            </div>
          </Menu>
          <Container ClassName="container">
              <Items items={this.state.items}/>
          </Container>
        </div>

    );
  }
}

export default App;
