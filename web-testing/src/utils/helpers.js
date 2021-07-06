export const ballValue = (strikeVal, ballVal) => {
  if (strikeVal === "xxx" || ballVal === "⚾⚾⚾") {
    return {
      ball: "",
      strike: ""
    };
  } else {
    return {
      ball: ballVal + "⚾"
    };
  }
};

export const strikeValue = (strikeVal, ballVal) => {
  if (strikeVal === "xx" || ballVal === "⚾⚾⚾⚾") {
    return {
      strike: "",
      ball: ""
    };
  } else {
    return {
      strike: strikeVal + "x"
    };
  }
};

export const hitBtn = () => {
  return {
    ball: "",
    strike: ""
  };
};

export const foulBtn = strikeVal => {
  if (strikeVal === "xx") {
    return;
  } else {
    return {
      strike: strikeVal + "x"
    };
  }
};

//on my class method
/*
have a function that will take an object
this function will change the state

const AddToBall = (obj) => {
    this.setState(obj)
}

on dashboard
have a function that will do the logic
const anotherFunction = () => {
    if (this.state.strike === "xxx" || this.state.ball === "⚾⚾⚾") {
      return ({
        ball: "",
        strike: ""
      });
    } else {
      return ({
        ball: this.state.ball + "⚾"
      });
    }
}

in utils

const anotherFunction = (strikeVal, ballVal) => {
    if (strikeVal === "xxx" || ballVal === "⚾⚾⚾") {
        return ({
            ball: "",
            strike: ""
        })
    } else {
        return ({
            ball: ballVal + "⚾"
        })
    }
}

*/
