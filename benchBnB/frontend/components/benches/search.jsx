import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import { withRouter } from 'react-router';

class Search extends React.Component {
  // componentWillReceiveProps(newProps) {
  //   if (!newProps.loggedIn) {
  //     this.props.router.push({
  //       pathname: "/login",
  //     });
  //   }
  // }

  render () {
    console.log(this.props);
    const { benches, updateBounds, requestBenches } = this.props;
    return (
      <div className='search'>
        <BenchMap benches={benches} updateBounds={updateBounds} />
        <BenchIndex benches={benches} requestBenches={requestBenches} />
      </div>
    );
  }
}

export default withRouter(Search);
