import fs from 'fs';
const url = "https://www.google.com/maps/place/56+Highwey+King+Restaurant+and+Family+Dhaba/@26.0439743,82.3472749,17z/data=!3m1!4b1!4m6!3m5!1s0x39907b729a2c6fa9:0x14390ef5f5fb486a!8m2!3d26.0439695!4d82.3498498";
fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }).then(res => res.text()).then(html => {
  fs.writeFileSync('./scripts/map.html', html);
  console.log("Written");
}).catch(console.error);
