const AWS = require('aws-sdk');

const updateTask = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const { title, description, done } = JSON.parse(event.body);

    const result = await dynamoDB.update({
        TableName: 'TasksTable',
        Key: { id },
        UpdateExpression: 'set title = :title, description = :description, done = :done',
        ExpressionAttributeValues: {
            ':title': title,
            ':description': description,
            ':done': done,
        },
        ReturnValues: 'ALL_NEW',
    }).promise();

    return {
        status: 200,
        body: {
            message: 'Task updated',
        },
    };
}

module.exports = {
    updateTask,
}