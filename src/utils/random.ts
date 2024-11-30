export const getRandomIndex = (
  currentIndex: number,
  min: number,
  max: number,
) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  let index = randomize(minCeiled, maxFloored);

  while (currentIndex === index) {
    index = randomize(minCeiled, maxFloored);
  }

  return index;
};

const randomize = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
