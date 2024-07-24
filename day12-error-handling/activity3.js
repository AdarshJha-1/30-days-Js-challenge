// Activity 3: Custom Error Object

// Task 4
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

const useOfCustomError = (isError) => {
  if (isError) {
    throw new MyError("Error using custom error class");
  } else {
    return "Everything fine";
  }
};

try {
  const result = useOfCustomError(true);
  console.log(result);
} catch (error) {
  if (error instanceof MyError) {
    console.error("Custom Error:", error.message);
  } else {
    console.error("Unexpected Error:", error.message);
  }
}

// Task 5
const isUserInputCorrect = (inputString) => {
  try {
    if (!inputString || inputString.trim() === "") {
      throw new MyError("Input string must not be empty");
    }
    console.log("Input string is correct");
    return true;
  } catch (error) {
    if (error instanceof MyError) {
      console.error("Custom Error::", error.message);
    } else {
      console.error("Unexpected Error::", error.message);
    }
  }
};

isUserInputCorrect("test");
isUserInputCorrect("");
