import { Program } from "./program";

import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const program = new Program()
    const result = program.getResult()

    context.res = {
        body: result
    };
};

export default httpTrigger;