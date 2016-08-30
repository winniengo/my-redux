import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <li className='bench-index-item'>
    {bench.description}
  </li>
);

export default BenchIndexItem;
