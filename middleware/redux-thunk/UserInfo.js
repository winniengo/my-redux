import { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from './actionCreators';

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(loadPosts(this.props.userId));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userId !== this.props.userId) {
      this.props.dispatch(loadPosts(nextProps.userId));
    }
  }

  render() {
    if (this.props.isFetching) {
      return (
        <p>Loading...</p>
      );
    }

    let posts = this.props.posts.map(post => (
      <Post post={post} key={post.id} />
    ));

    return (
      <div>{posts}</div>
    );
  }
}

// using connect without definining a container
const UserInfo = connect(state => ({ posts: state.posts }))(Posts);
export default UserInfo;
