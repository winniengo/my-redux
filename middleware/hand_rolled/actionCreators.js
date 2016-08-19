export const loadPosts = (userId) => ({
  types: ['LOAD_POSTS_REQUEST', 'LOAD_POSTS_SUCCESS', 'LOAD_POSTS_FAILURE'],
  shouldCallAPI: state => !state.posts[userId],
  callApi: () => fetch(`http://myapi.com/users/${userId}/posts`),
  payload: { userId }
});

export const loadComments = (postId) => ({
  types: ['LOAD_COMMENTS_REQUEST', 'LOAD_COMMENTS_SUCCESS', 'LOAD_COMMENTS_FAILURE'],
  shouldCallAPI: (state) => !state.comments[postId],
  callAPI: () => fetch(`http://myapi.com/posts/${postId}/comments`),
  payload: { postId }
});

export const addComment = (postId, message) => ({
  types: ['ADD_COMMENT_REQUEST', 'ADD_COMMENT_SUCCESS', 'ADD_COMMENT_FAILURE'],
  callApi: () => fetch(
    `http://myapi.com/posts/${postId}/comments`,
    {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message})
    }),
  payload: { postId, message }
});
