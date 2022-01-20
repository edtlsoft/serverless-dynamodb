"use strict";

module.exports.hello = async (event) => {
  return {
    status: 200,
    body: JSON.stringify(
      {
        message: "Hello world!",
        input: event,
      },
      null,
      2
    ),
  };
};
