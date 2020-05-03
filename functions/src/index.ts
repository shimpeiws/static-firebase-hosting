import * as functions from "firebase-functions";
import * as basicAuth from "basic-auth-connect";
import * as fs from "fs";

exports.filter = functions.https.onRequest((req, res) => {
  const clientIp = requestIp.getClientIp(req);

  const isAllowed = basicAuth((user: any, password: any) => {
    return user === "user" && password === "password";
  });
  const statusCode = isAllowed ? 200 : 400;
  const filename = isAllowed ? "index" : "400";

  const html = fs.readFileSync(`./static/${filename}.html`).toString();

  res.status(statusCode).send(html);
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
