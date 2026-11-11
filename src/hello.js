const hello = async (event) => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Serverless HTTP API is healthy and operational",
      timestamp: new Date().toISOString()
    })
  };
};

module.exports = {
  handler: hello
};
