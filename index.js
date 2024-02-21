function alertWithTime() {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  if (hr > 12) {
    hr = hr - 12;
  }
  alert("Hello everyone at time" + " " + hr + ":" + min + ":" + sec);
}
alertWithTime();
