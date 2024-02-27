const express = require("express");
const app = express();

app.get("/mean", function (req, res) {
  let numbers = [];

  let splitStrings = req.query.nums.split(",");

  for (let i = 0; i < splitStrings.length; i++) {
    let number = Number(splitStrings[i]);
    numbers.push(number);
  }

  let result = {
    operation: "mean",
    result: function (numbers) {
      if (numbers.lenght === 0) {
        return 0;
      } else {
        return (
          numbers.reduce(function (acc, cur) {
            return acc + cur;
          }) / numbers.length
        );
      }
    },
  };

  return res.send(result);
});

app.get("/median", function (req, res) {
  let numbers = [];

  let splitStrings = req.query.nums.split(",");

  for (let i = 0; i < splitStrings.length; i++) {
    let number = Number(splitStrings[i]);
    numbers.push(number);
  }

  let result = {
    operation: "median",
    result: function (numbers) {
      numbers.sort((a, b) => a - b);

      let middleIdx = Math.floor(nums.length / 2);
      let median;

      if (numbers.length % 2 === 0) {
        median = numbers[middleIdx] + numbers[middleIdx - 1] / 2;
      } else {
        median = numbers[middleIdx];
      }
      return median;
    },
  };

  res.send(result);
});

app.get("/mode", function (req, res) {
  let numbers = [];

  let splitStrings = req.query.nums.split(",");

  for (let i = 0; i < splitStrings.length; i++) {
    let number = Number(splitStrings[i]);
    numbers.push(number);
  }

  let result = {
    operation: "mode",
    result: function (numbers) {
      let frequency = numbers.reduce(function (acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
      }, {});

      let count = 0;
      let mostFrequent;

      for (let key in mostFrequent) {
        if (frequency[key] > count) {
          mostFrequent = key;
          count = frequency[key];
        }
      }

      return +mostFrequent;
    },
  };

  return res.send(result);
});

app.listen(3000, function () {
  console.log("Server starting on port 3000");
});
