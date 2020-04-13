import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
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
    allTodos: [],
    todos: []
  };

  filAll = () => {
    this.setState({
      todos: [...this.state.allTodos]
    });
  }

  filActive = () => {
    this.setState({
      todos: this.state.allTodos.filter(todo => !todo.completed)
    });
  }

  filComplete = () => {
    this.setState({
      todos: this.state.allTodos.filter(todo => todo.completed)
    });
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=0')
      .then(res => this.setState({ allTodos: res.data, todos: res.data }));
  }

  markComplete = id => {
    this.setState({
      allTodos: [...this.state.allTodos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })]
    });
  };

  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.allTodos.filter(todo => todo.id !== id)]
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
        const todos =  [...this.state.allTodos, res.data];
        this.setState({ todos, allTodos: todos  });
      });
  };

  render() {
    const { todos } = this.state;
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
                    todos={todos}
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