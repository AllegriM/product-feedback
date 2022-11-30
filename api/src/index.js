const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/app.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(routes);
app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`Server connected and running on PORT: ${PORT}`);
});
