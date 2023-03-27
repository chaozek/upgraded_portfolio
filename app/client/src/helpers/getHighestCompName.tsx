// Initialize variables to hold the highest number and the corresponding intro
const getHighestCompName = (arr, compName) => {
  const result = {
    intro: 0,
    ComponentWithImage: 0,
    ThreeColumnsWithPicture: 0,
    LightBigBox: 0,
  };

  arr.forEach((str) => {
    if (str.startsWith("intro")) {
      const match = str.match(/\d+/);
      if (match) {
        const number = parseInt(match[0], 10);
        if (number > result.intro) {
          result.intro = number;
        }
      }
    } else if (str.startsWith("ComponentWithImage")) {
      const match = str.match(/\d+/);
      if (match) {
        const number = parseInt(match[0], 10);
        if (number > result.ComponentWithImage) {
          result.ComponentWithImage = number;
        }
      }
    } else if (str.startsWith("ThreeColumnsWithPicture")) {
      const match = str.match(/\d+/);
      if (match) {
        const number = parseInt(match[0], 10);
        if (number > result.ThreeColumnsWithPicture) {
          result.ThreeColumnsWithPicture = number;
        }
      }
    } else if (str.startsWith("LightBigBox")) {
      const match = str.match(/\d+/);
      if (match) {
        const number = parseInt(match[0], 10);
        if (number > result.LightBigBox) {
          result.LightBigBox = number;
        }
      }
    }
  });

  return result[compName] + 1;
};
export default getHighestCompName;
