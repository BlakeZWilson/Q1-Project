# Q1-Project
Q1 project for Galvanize (a team rider page for descentlongboards.com)

[Deployed link](http://google.com/)

### Wireframes
[Wireframes](https://wireframe.cc/S1qO5V)


### A style guide

[Color Scheme](http://coolors.co/220901-621708-941b0c-bc3908-f6aa1c)
```
/* RGB */
$color1: rgba(34, 9, 1, 1);
$color2: rgba(98, 23, 8, 1);
$color3: rgba(148, 27, 12, 1); //main
$color4: rgba(188, 57, 8, 1);
$color5: rgba(246, 170, 28, 1);
```

Fonts: Oswald & Quattrocento (example below)
```
<link href="https://fonts.googleapis.com/css?family=Oswald|Quattrocento" rel="stylesheet">
```
or
```
<style>
@import url('https://fonts.googleapis.com/css?family=Oswald|Quattrocento');
</style>
```

CSS -
font-family: 'Oswald', sans-serif;
font-family: 'Quattrocento', serif;


### Planning

[Planning Board]()


### Schema/ERD for Database (only needed for Q2/Q3/Q4 projects)
[ERD]()

### Server Routes Plan (example below, only needed for Q2/Q3/Q4 Projects)

- Users
  - POST /api/signup Create a new user
  - POST /api/login User login
  - GET /api/users/:id Retrieve user information
  - DELETE /api/users/:id Delete a user account

- Animals
  - POST /api/animals Create a new animal
  - GET /api/animals Retrieve all animals
  - GET /api/animals/:id Retrieve a single animal
  - PATCH /api/animals/:id Update a single animal
  - DELETE /api/animals/:id Delete an animal

- Houses
  - GET /api/users/:id/houses/:type Retrieve a user's houses
  - POST /api/users/:id/houses/:type Post a user's houses
  - PATCH /api/users/:id/houses/:type Update a user's houses
