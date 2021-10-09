const smartGarbage = (whichKind, obj) => {
  obj[whichKind]++;
  return obj;
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
