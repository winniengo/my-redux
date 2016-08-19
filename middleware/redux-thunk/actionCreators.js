export const loadPosts = (userId) => (dispatch, getState) => {
  let { posts } = getState();

  if (post[userId]) {
    return;
  }

  dispatch({
    type: 'LOAD_POSTS_REQUEST',
    userId
  });

  // dispatch vanila actions asynchronously
  fetch(`http://myapi.com/users${userId}/posts`).then(
    response => dispatch({
      type: 'LOAD_POSTS_SUCESS',
      userId,
      response
    }),
    error => dispatch({
      type: 'LOAD_POSTS_FAILURE',
      userId,
      error
    })
  );
};
