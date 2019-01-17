import app from './app'

// Deciding which port to use
var port = process.env.PORT || 3333

// Start our nodejs app
app.listen(port, function () {
  console.log(`App started listening on port ${port}`)
})
