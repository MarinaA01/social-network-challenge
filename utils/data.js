const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionName: getRandomArrItem(reaction),
        score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
      });
    }
    return results;
  };

  module.exports = { getRandomName, getRandomReactions };