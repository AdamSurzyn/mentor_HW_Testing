const bmi = (height, weight) => {
  const bmi = weight / Math.pow(height, 2);
  switch (true) {
    case bmi < 18.5:
      return "Niedowaga";
    case bmi > 18.5 && bmi < 24.9:
      return "Normalna";
    case bmi > 24.9:
      return "Nadwaga";
  }
};

module.exports = bmi;
