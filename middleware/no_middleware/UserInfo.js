import { Component } from 'react';
import { connect } from 'react-redux';
import { loadPostsRequest, loadPostsSuccess, loadPostsFailure } from './actionCreators';

class Posts extends Component {
  loadData(userId) {
    // injected into props by React Redux connect() call
    let { dispatch, posts } = this.props;

    if (posts[userId]) {
      return;
    }

    dispatch(loadPostsRequest(userId));

    fetch(`http://myapi.com/users/${userId}.posts`).then(
      response => dispatch(loadPostsSuccess(userId, response)),
      error => dispatch(loadPostsFailure(userId, error))
    );
  }

  componentDidMount() {
    this.loadData(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userId !== this.props.userId) {
      this.loadData(nextProps.userId);
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
