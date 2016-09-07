import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState(
      {[field]: e.currentTarget.value}
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processType(this.state);
  }

  render () {
    return (
      <div className='session-form'>
        <form onSubmit={this.handleSubmit}>
          <label className='session-form-field'>
            Username:
          </label>
          <input
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
            className='session-form-input' />

          <label className='session-form-field'>
            Password:
          </label>
          <input
            type='text'
            value={this.state.password}
            onChange={this.update('password')}
            className='session-form-input' />

          <input
            type='submit'
            value={this.props.formType}
            className='session-form-submit'/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
