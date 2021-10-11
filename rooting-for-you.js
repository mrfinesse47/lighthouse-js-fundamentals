const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 1,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 21,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

const judgeVegetable = function (vegetables, metric) {
  let highestScore = 0;
  let currentWinner = "";

  vegetables.forEach((veggie) => {
    if (veggie[metric] > highestScore) {
      highestScore = veggie[metric];
      currentWinner = veggie.submitter;
    }
  });
  return currentWinner;
};

console.log(judgeVegetable(vegetables, metric));
