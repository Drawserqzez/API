import express from 'express'

class App {
    private _express: express.Application;
    private _port: string;

    constructor() {
        this._express = express();
        this._port = process.env.PORT || "3000";
    }

    // TODO: Add more things here, ex. middlewares.
    // TODO: Also needed are repositories and models for the data
    // TODO: This project is gonna use a mongoDB, and be hosted in heroku (i think)
    // TODO: Set up CI/CD flow

    public start(): void {
        this._express.listen(this._port, () => {
            console.log("Listening on port " + this._port);
        });
    }
}

export default App;