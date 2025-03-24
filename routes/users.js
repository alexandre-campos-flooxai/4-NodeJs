let express = require('express');
let routes = express.Router();

routes.get('/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.json({
      users: [
        {
          name: 'Ale',
          email: 'ale@gmail.com',
          id: 1,
        },
      ],
    }),
  );
});

routes.get('/users/admin', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.json({
      users: [{}],
    }),
  );
});

module.exports = routes;
