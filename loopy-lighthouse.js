for (var i = 100; i <= 200; i++) {
  if (!(i % 3) && !(i % 4)) {
    console.log("LoopyLighthouse");
  } else {
    if (!(i % 3)) {
      console.log("Loopy");
    } else if (!(i % 4)) {
      console.log("Lighthouse");
    } else {
      console.log(i);
    }
  }
}
