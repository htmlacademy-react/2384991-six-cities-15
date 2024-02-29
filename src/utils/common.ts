const getRandomArrayElement = (items: string[]) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (max: number) => Math.floor(Math.random() * max) + 1;

const getRandomBoolean = () => Math.random() >= 0.5;

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

export { getRandomArrayElement,
  getRandomInteger,
  getRandomBoolean,
  createIdGenerator,
};
