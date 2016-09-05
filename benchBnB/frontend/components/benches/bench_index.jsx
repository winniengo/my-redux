import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component{
  render() {
    return (
      <div className='bench-index'>
        <ul>
        {this.props.benches.map((bench, idx) => (
          <BenchIndexItem key={idx} bench={bench} />
        ))}
        </ul>
      </div>
    );
  }
};



export default BenchIndex;
