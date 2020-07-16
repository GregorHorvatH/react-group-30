import { connect } from 'react-redux';
import { getDoneItems } from './selectors';
import TodoList from './index';

const mapStateToProps = (state) => ({
  items: getDoneItems(state),
});

export default connect(mapStateToProps)(TodoList);
