# Surf Shop Routes

## Index

METHOD | RESTful action      | path
-------+---------------------+----------------
GET    | index               | /
GET    | register            | /register
POST   | register create     | /register
GET    | login               | /login
POST   | login create        | /login
GET    | logout              | /logout
GET    | redirect to profile | /profile
GET    | forgot              | /forgot
PUT    | forgot logic        | /forgot
GET    | reset               | /reset/:token
PUT    | reset logic         | /reset/:token

## Posts

METHOD | RESTful action | path
-------+----------------+----------------
GET    | index          | /posts
GET    | new            | /posts/new
POST   | create         | /posts
GET    | show           | /posts/:id
GET    | edit           | /posts/:id/edit
PUT    | update         | /posts/:id
DELETE | destroy        | /posts/:id

## Reviews

METHOD | RESTful action | path
-------+----------------+----------------
GET    | index          | /posts/:id/review
GET    | new            | /posts/:id/review/new
POST   | create         | /posts/:id/review
GET    | show           | /posts/:id/review/:review_id
GET    | edit           | /posts/:id/review/:review_id/edit
PUT    | update         | /posts/:id/review/:review_id
DELETE | destroy        | /posts/:id/review/:review_id
