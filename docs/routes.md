# Surf Shop Routes

## Index

METHOD | RESTful action | path
-------+----------------+----------------
GET    | index          | /


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
