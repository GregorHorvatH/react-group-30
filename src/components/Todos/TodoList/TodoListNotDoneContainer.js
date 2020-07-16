import { connect } from 'react-redux';
import { getNotDoneItems } from './selectors';
import TodoList from './index';

const mapStateToProps = (state) => ({
  items: getNotDoneItems(state),
});

export default connect(mapStateToProps)(TodoList);
