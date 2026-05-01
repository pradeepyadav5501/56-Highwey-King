const url = "https://maps.app.goo.gl/uymiWnx9yeyiGXWm9";
fetch(url, { redirect: "manual" }).then(res => {
  console.log(res.status, res.headers.get("location"));
}).catch(console.error);
