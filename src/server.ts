import express, { request } from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "hello world" })
});

app.post("/", (request, reponse) => {
    return reponse.json({ message: "os dados forma salvos com sucesso!" })
});

app.listen(3333, () => console.log("Server is running!"));