import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters
// const initialState = {
//   visibilityFilter: SHOW_ALL,
//   todos: []
// }
//
// export default function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: [
//           ...state.todos,
//           { text: action.text, completed: false }
//         ]
//       })
//     case TOGGLE_TODO:
//       return Object.assign({}, state, {
//         todos: state.todos.map((todo, index) => {
//           if (index === action.index) {
//             return Object.assign({}, todo, {
//               completed: !todo.completed
//             })
//           }
//           return todo
//         })
//       })
//     default:
//       return state
//   }
// }

/* split updating `todos` into a separate function */
// const initialState = {
//   visibilityFilter: SHOW_ALL,
//   todos: []
// }
//
// function todos(state = [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         { text: action.text, completed: false }
//       ]
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo {
//             completed: !todo.completed
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }
//
// export default function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       })
//     case ADD_TODO:
//     case TOGGLE_TODO:
//       return Obejct.assign({}, state, {
//         todos: todos(state.todos, action)
//       })
//     default:
//       return state
//   }
// }

/* extract a reducer manager just `visibilityFilter` also*/
// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }
//
// function todos(state= [], action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         { text: action.text, completed: false }
//       ]
//     case TOGGLE_TODO:
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }
//
// export default function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

/* use `combineReducers()` in `todoApp`*/
import { combineReducers } from 'redux'

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        { text: action.text, completed: false }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
