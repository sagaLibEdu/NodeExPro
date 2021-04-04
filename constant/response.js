export const codeResponseJson = {
    200: {
        description: "Success",
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
    },
    400: {
        description: "Validation Error",
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
    },
    401: {
        description: "Unauthorized",
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
    },
    500: {
        description: "Internal Server",
        type: SwaggerDefinitionConstant.Response.Type.OBJECT,
    }
}