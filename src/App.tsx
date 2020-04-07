import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo.js';
import Contact from './components/pages/Contact';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';
import Filter from './components/Filter';

class App extends Component {
  state = {
    todos: []
  };

  filAll = () => {
    this.setState({
      todos: this.state.todos
    });
  }

  filActive = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  filComplete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed)
    });
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Filter 
                  filAll={this.filAll}
                  filActive={this.filActive}
                  filComplete={this.filComplete}
                  />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;