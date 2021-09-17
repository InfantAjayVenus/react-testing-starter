import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex', margin: "1rem auto", justifyContent: 'space-around' }}>
        <input 
          type="text" 
          name="title" 
          style={{ flex: '8', padding: '1rem 0.5rem', borderRadius: '0.45rem' }}
          placeholder="Add Todo ..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <span style={{display: 'inline-block', flex: '0.25'}} aria-hidden="true"></span>
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1', borderRadius: '0.45rem'}}
          disabled={this.state.title.length === 0}
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
