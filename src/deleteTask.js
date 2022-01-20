const AWS = require('aws-sdk');

const deleteTask = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const result = await dynamoDB.delete({
        TableName: 'TasksTable',
        Key: { id }
    }).promise();

    const task = result.Item;

    return {
        status: 200,
        body: {
            message: 'Task removed'
        },
    };
}

module.exports = {
    deleteTask,
}