const resolvedWrapper = (value) => {
  return new Promise((resolve) => {
    resolve(value);
  });
  // return Promise.resolve(value);
};

const rejectedWrapper = (value) => {
  return new Promise((resolve, reject) => {
    reject(new Error(value));
  });
  // return Promise.reject(new Error(value));
};

const handleResolvedPromise = (promise) => {
  return promise.then((value) => {
    console.log(value);
    return value; 
  });
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise.then((value) => {
    console.log(value);
    return value;
  }).catch((error) => {
    console.error(`Your error message was: ${error.message}`);
    return null;
  });
};

const pauseForMs = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
