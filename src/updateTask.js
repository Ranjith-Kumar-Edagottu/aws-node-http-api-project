const AWS = require("aws-sdk");

const updateTask = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  const { completed } = JSON.parse(event.body);

  try {
    await dynamoDB
      .update({
        TableName: "TodoTable",
        Key: { id },
        UpdateExpression: "set completed = :completed",
        ExpressionAttributeValues: {
          ":completed": completed
        },
        ReturnValues: "ALL_NEW"
      })
      .promise();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Task updated successfully",
        taskId: id,
        completed
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Failed to update task",
        error: error.message
      })
    };
  }
};

module.exports = {
  handler: updateTask
};
