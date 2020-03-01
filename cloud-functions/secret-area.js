exports.handler = function(event, context, callback) {
  // receive and process the request. if match, then excute the callback funtion
  const secretContent = `
  <h3>Welcome to the secret area</h3>
  <p>The sky is <strong>blue</strong></p>`;

  let body;
  if (event.body) {
    body = JSON.parse(event.body);
  } else {
    body = {};
  }

  if (body.password == "javascript") {
    callback(null, {
      // 200 success
      statusCode: 200,
      // url return the value
      body: secretContent
    });
  } else {
    callback(null, {
      // 200 success
      statusCode: 401
    });
  }
};
