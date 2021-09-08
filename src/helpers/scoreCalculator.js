const scoreCalculator = (timer, difficult) => {
  const difficultObject = {
    hard: 3,
    medium: 2,
    easy: 1,
  };
  const difficultPoints = difficultObject[difficult];
  const basePoints = 10;
  console.log(basePoints + (timer * difficultPoints));
  return (basePoints + (timer * difficultPoints));
};

export default scoreCalculator;
