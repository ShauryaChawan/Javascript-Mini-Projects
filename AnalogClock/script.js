setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  // Old method but the stable one of accessing and modificying HTML elements using thier id
  document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
  document.getElementById("minute").style.transform = `rotate(${mrotation}deg)`;
  document.getElementById("second").style.transform = `rotate(${srotation}deg)`;

  // ⭐ NEW ⭐ method of accessing and modificying HTML elements using thier id
  // hour.style.transform = `rotate(${hrotation}deg)`;
  // minute.style.transform = `rotate(${mrotation}deg)`;
  // second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
