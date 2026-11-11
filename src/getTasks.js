const AWS = require("aws-sdk");

const getTasks = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  try {
    const results = await dynamoDB
      .scan({
        TableName: "TodoTable"
      })
      .promise();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Tasks retrieved successfully",
        data: results.Items
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Failed to fetch tasks",
        error: error.message
      })
    };
  }
};

module.exports = {
  handler: getTasks
};
