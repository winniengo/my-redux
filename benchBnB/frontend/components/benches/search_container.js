import { connect } from 'react-redux';
import Search from './search';
import { allBenches } from '../../reducers/selectors';
import { requestBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
  benches: allBenches(state)
});

const mapDispatchToProps = dispatch => ({
  requestBenches: () => dispatch(requestBenches()),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
