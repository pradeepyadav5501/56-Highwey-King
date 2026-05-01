fetch("https://nominatim.openstreetmap.org/reverse?lat=26.0439695&lon=82.3498498&format=json", { headers: { "User-Agent": "NodeJS/18" } })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }).catch(console.error);
