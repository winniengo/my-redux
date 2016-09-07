import React from 'react';
import { withRouter } from 'react-router';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    const { lng, lat } = this.props;

    this.state = {
      description: "",
      seating: 2,
      lng,
      lat
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBench(this.state);
    this.props.router.push({
      pathname: "/",
    });
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value}
    );
  }

  render() {
    return (
      <div className='bench-form'>
        <h3 className='bench-form-title'>
          Create A Bench!
        </h3>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <label className='bench-form-field'>
            Description
          </label>
          <input
            type='text'
            value={this.state.description}
            onChange={this.update('description')}
            className='bench-form-input' />

          <label className='bench-form-field'>
            # of Seats:
          </label>
          <input
            type='text'
            value={this.state.seating}
            onChange={this.update('seating')}
            className='bench-form-input' />

          <label className='bench-form-field'>
            Latitude
          </label>
          <input
            type='number'
            value={this.state.lat}
            className='bench-form-input'
            disabled />

          <label className='bench-form-field'>
            Longitude
          </label>
          <input
            type='number'
            value={this.state.lng}
            className='bench-form-input'
            disabled />

          <input className='bench-form-submit' type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default withRouter(BenchForm);
