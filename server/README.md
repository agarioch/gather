## Endpoints

| Method | path                 | params | body     | returns                                                           |
| ------ | -------------------- | ------ | -------- | ----------------------------------------------------------------- |
| GET    | /posts               | -      | -        | array of posts                                                    |
| GET    | /posts/:id           | id     | -        | selected post                                                     |
| PATCH  | /posts/:id/upvote    | id     | -        | increment votes by 1                                              |
| POST   | /posts/:id/reply     | id     | Reply    | append reply to post                                              |
| POST   | /posts               | -      | Post     | append post to posts                                              |
| POST   | /posts/:id/submit    | id     | Response | append response to responses and add user name to post respondees |
| GET    | /posts/:id/responses | id     | -        | get responses for survey                                          |
| GET    | /responses           | -      | -        | get all responses                                                 |
| GET    | /users               | -      | -        | get all users                                                     |
| GET    | /users/:email        | email  | -        | get user by email address                                         |

## Setup

### example .env file

SERVER_PORT=5000
AUTH0_AUDIENCE=https://gather-team.com/api/
AUTH0_DOMAIN=gather.eu.auth0.com
DB_URI=mongodb://localhost:27017/gatherDevDB
