// A basic redux-thunk action that only dispatches when value exists
const someAction = value => dispatch => {
    const item = getItem(value)
    if (item != null) {
      dispatch({ type: 'ACTION', item })
    }
  }

  /// use it


  // short circuit
const someAction = value => dispatch => {
    const item = getItem(value)
    item && dispatch({ type: 'ACTION', item })
  }

  // or

  const ifVal = (x, f) => x == null ? null : f(x)