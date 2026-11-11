const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const createTask = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { task } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();

  const newTask = {
    id,
    task,
    createdAt,
    completed: false
  };

  try {
    await dynamoDB
      .put({
        TableName: "TodoTable",
        Item: newTask
      })
      .promise();

    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Task created successfully",
        data: newTask
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Failed to create task",
        error: error.message
      })
    };
  }
};

module.exports = {
  handler: createTask
};
