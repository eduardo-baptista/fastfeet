import app from './app';

app.listen(3333, err => {
  if (err) throw new Error(err);

  console.log('server listening on port 3333');
});
