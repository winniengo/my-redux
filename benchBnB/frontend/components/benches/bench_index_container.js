import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { allBenches } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  benches: allBenches(state)
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
