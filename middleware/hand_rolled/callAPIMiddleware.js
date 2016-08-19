// const callAPIMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//   // body
// };

function callAPIMiddleware({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      const {
        types,
        callAPI,
        shouldCallAPI = () => true,
        payload = {}
      } = action;

      if (!types) { // normal action, pass it on
        return next(action);
      }

      if (!Array.isArray(types) || types.length !== 3 || !types.every(type => typeof type === 'string')) {
        throw new Error('expected an array of three string types');
      } else if (typeof callAPI !== 'function') {
        throw new Error('expected callAPI to be a function');
      } else if (!shouldCallAPI(getState())) {
        return;
      }

      const [
        requestType,
        successType,
        failureType
      ] = types;

      dispatch(Object.assign({}, payload, {
        type: requestType
      }));

      return callAPI().then(
        response => dispatch(Object.assign({}, payload, {
          type: successType
          response,
        })),
        error => dispatch(Object.assign({}, payload, {
          type: errorType
          error,
        }))
      )
    };
  };
}
