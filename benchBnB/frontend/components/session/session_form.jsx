import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.errors.length !== 0) {
      this.props.clearErrors();
    }
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
    const errors = (
      <ul className='session-form-errors-list'>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );

    return (
      <div className='session-form'>
        <div className='session-form-errors'>
          {errors}
        </div>
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
            type='password'
            value={this.state.password}
            onChange={this.update('password')}
            className='session-form-input' />

          <input
            type='submit'
            value={this.props.formType === 'login' ? 'Login' : 'Sign up!'}
            className='session-form-submit'/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
