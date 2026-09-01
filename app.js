import express from 'express'

const app = express()

// RUTAS
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/servicios', (req, res) => {
    res.send('Servicios');
});

// LEVANTAR SERVIDOR
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})