# static-firebase-hosting

## Get Token for CI

`firebase login:ci`

```
% firebase login:ci                                                                                                                                         [21:44:51]

Visit this URL on this device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=you-url

Waiting for authentication...

✔  Success! Use this token to login on a CI server:

1//YOUR-TOKEN

Example: firebase deploy --token "$FIREBASE_TOKEN"
```
