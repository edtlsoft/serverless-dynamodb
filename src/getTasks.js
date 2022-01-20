const AWS = require("aws-sdk");

const getTasks = async () => {
    try {
        const dynamoDB = new AWS.DynamoDB.DocumentClient();

        const result = await dynamoDB
            .scan({
                TableName: "TasksTable",
            })
            .promise();

        const tasks = result.Items;

        return {
            status: 200,
            body: {
                tasks,
            },
        };
    } 
    catch (error) {
        console.log("This is a bug", error);
    }
};

module.exports = {
  getTasks,
};
