const scoreCalculator = (timer, difficult) => {
  const difficultObject = {
    hard: 3,
    medium: 2,
    easy: 1,
  };
  const difficultPoints = difficultObject[difficult];
  const basePoints = 10;
  return (basePoints + (timer * difficultPoints));
};

export default scoreCalculator;
