import { Request, Response } from "express";
import allRoutes from "express-list-endpoints";

import app from "./src/app";

app.listen(process.env.APP_PORT, () => {
    console.log(
        "\x1b[31m%s",
        "-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|",
        "\x1b[0m"
    );

    console.log(
        "\x1b[34m%s",
        "Using environment :\x1b",
        "\x1b[33m",
        process.env.NODE_ENV,
        "\x1b[0m"
    );

    console.log(
        "\x1b[34m%s",
        "Running On :\x1b",
        "\x1b[33m",
        +`${process.env.APP_PORT}`,
        "\x1b[0m"
    );

    console.log("\x1b[34m%s", "Route Count : ", allRoutes(app).length);

    console.log(
        "-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|"
    );

    console.log(
        "Server -> Server started at : ",
        "\x1b[33m",
        new Date().toLocaleString()
    );
});
