if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/sw.js')
  .then(function(registration) {
    console.log('Registered:', registration);
  })
  .catch(function(error) {
    console.log('Registration failed: ', error);
  });
}