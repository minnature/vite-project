/* eslint-disable @typescript-eslint/no-unused-vars */
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import axios from 'axios';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    try {
        const response = await axios("https://yesno.wtf/api");
        console.log(response.data);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error fetching data." })
        };
    }
};

export { handler };
