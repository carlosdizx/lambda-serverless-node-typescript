import {APIGatewayProxyHandler} from "aws-lambda";
export const handler: APIGatewayProxyHandler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'ok',
            id: 2,
            name: event.body,
            xd: 1
        }),
    };
}
