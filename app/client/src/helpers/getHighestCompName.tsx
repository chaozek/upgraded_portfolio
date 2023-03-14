// Initialize variables to hold the highest number and the corresponding intro
let highestNumber = -1;
let highestIntro = null;
let regex;
const getHighestCompName = (arr, compName) => {
  switch (compName) {
    case "intro":
      regex = /^intro(\d+)$/;
      break;
    case "ComponentWithImage":
      regex = /^ComponentWithImage(\d+)$/;
      break;
    case "ThreeColumnsWithPicture":
      regex = /^ThreeColumnsWithPicture(\d+)$/;
      break;
    case "LightBigBox":
      regex = /^LightBigBox(\d+)$/;
      break;
    default:
      break;
  }
  for (const intro of arr) {
    const match = intro.match(regex);

    if (match && Number(match[1]) > highestNumber) {
      highestNumber = Number(match[1]);
      highestIntro = intro;
    }
  }

  if (highestIntro) {
    const match = highestIntro.match(regex);

    if (match) {
      const newNumber = Number(match[1]) + 1;
      highestIntro = `${compName}${newNumber}`;
    }
  }
  return highestIntro;
};
export default getHighestCompName;
