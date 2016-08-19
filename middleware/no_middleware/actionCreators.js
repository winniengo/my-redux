export const loadPostsSucess = (userId, response) => ({
  type: 'LOAD_POSTS_SUCESS',
  userId,
  response
});

export const loadPostsFailer = (userId, error) => ({
  type: 'LOAD_POSTS_FAILURE',
  userId,
  error
});

export const loadPostsRequest = (userId) => ({
  type: 'LOAD_POSTS_REQUEST',
  userId
});
