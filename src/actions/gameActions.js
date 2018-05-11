// Creates a basic action
const createAction = (type, actionProps) => {
    return {
      type,
      ...actionProps
    };
  }

  