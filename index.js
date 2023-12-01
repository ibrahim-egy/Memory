const animalsData = [
  {
    src: "https://res.cloudinary.com/duyb9jogb/image/upload/v1701431194/Tiger_jhwjho.jpg",
    meaning: "Tiger",
  },
  {
    src: "https://res.cloudinary.com/duyb9jogb/image/upload/v1701432042/Lion_bx9riw.jpg",
    meaning: "Lion",
  },
  {
    src: "https://res.cloudinary.com/duyb9jogb/image/upload/v1701432045/Rhinoceros_y6qcjd.jpg",
    meaning: "Rhinoceros",
  },
  {
    src: "https://res.cloudinary.com/duyb9jogb/image/upload/v1701432044/Panda_ezfjn8.jpg",
    meaning: "Panda",
  },
  {
    src: "https://res.cloudinary.com/duyb9jogb/image/upload/v1701432043/Monkey_lbltxb.jpg",
    meaning: "Monkey",
  },
  {
    src: "https://res.cloudinary.com/duyb9jogb/image/upload/v1701432043/Lizard_u0g8ed.jpg",
    meaning: "Lizard",
  },
  {
    src: "https://res.cloudinary.com/duyb9jogb/image/upload/v1701432042/Hippo_enijqi.jpg",
    meaning: "Hippo",
  },
  {
    src: "https://res.cloudinary.com/duyb9jogb/image/upload/v1701432041/Giraffe_vfxo5g.jpg",
    meaning: "Giraffe",
  },
  {
    src: "https://res.cloudinary.com/duyb9jogb/image/upload/v1701432041/Elephant_omw7wf.jpg",
    meaning: "Elephant",
  },
  {
    src: "https://res.cloudinary.com/duyb9jogb/image/upload/v1701432041/Deer_aoefb6.jpg",
    meaning: "Deer",
  },
];

const colorsData = [
  {
    src: "https://res.cloudinary.com/dbvtwnl4j/image/upload/v1701442248/rexd_hfmh1m.jpg",
    meaning: "Red",
  },
  {
    src: "https://res.cloudinary.com/dbvtwnl4j/image/upload/v1701442248/orange_uxybdi.jpg",
    meaning: "Orange",
  },
  {
    src: "https://res.cloudinary.com/dbvtwnl4j/image/upload/v1701442248/blue_rnwetr.jpg",
    meaning: "Blue",
  },
  {
    src: "https://res.cloudinary.com/dbvtwnl4j/image/upload/v1701442248/yellow_uikfis.jpg",
    meaning: "Yellow",
  },
  {
    src: "https://res.cloudinary.com/dbvtwnl4j/image/upload/v1701442248/green_lbjmlo.jpg",
    meaning: "Green",
  },
  {
    src: "https://res.cloudinary.com/dbvtwnl4j/image/upload/v1701442248/purple_r4ulrs.jpg",
    meaning: "Purple",
  },
  {
    src: "https://res.cloudinary.com/dbvtwnl4j/image/upload/v1701442248/pink_l1ygtv.jpg",
    meaning: "Pink",
  },
  {
    src: "https://res.cloudinary.com/dbvtwnl4j/image/upload/v1701442248/white_lvblbw.jpg",
    meaning: "White",
  },
  {
    src: "https://res.cloudinary.com/dbvtwnl4j/image/upload/v1701442248/gold_qnlnra.jpg",
    meaning: "Gold",
  },
  {
    src: "https://res.cloudinary.com/dbvtwnl4j/image/upload/v1701442248/grey_tw2b37.jpg",
    meaning: "Grey",
  },
];

const gameStates = ["Animals", "Colors"];
let currentGameState = gameStates[0];
const actionButtonAllStats = [
  "Show meanings",
  "Hide one",
  "Show result",
  "Go Again",
];
let actionButtonCurrentState = actionButtonAllStats[0];
const card = document.querySelector(".card");
const cardImages = document.querySelectorAll(".card__image");
const cardMeanings = document.querySelectorAll(".card__meaning");
let imageToBeShown;
// show meaning

const actionButton = document.querySelector(".button__action");
const startButton = document.querySelector(".button__start");
actionButton.innerHTML = actionButtonAllStats[0];

const generateRandomColors = () => {
  const PickedColors = [];
  let num = getRandomInt(10);
  for (let i = 0; i < cardImages.length; i++) {
    while (PickedColors.includes(num)) {
      num = getRandomInt(10);
    }

    PickedColors.push(num);
    const randomColor = colorsData[num];
    cardImages[i].setAttribute("src", randomColor.src);
    cardMeanings[i].innerHTML = randomColor.meaning;
  }
};

// add random images

const generateRandomImages = () => {
  const PickedImages = [];
  let num = getRandomInt(10);
  for (let i = 0; i < cardImages.length; i++) {
    while (PickedImages.includes(num)) {
      num = getRandomInt(10);
    }

    PickedImages.push(num);
    const randomImage = animalsData[num];
    cardImages[i].setAttribute("src", randomImage.src);
    cardMeanings[i].innerHTML = randomImage.meaning;
  }
};

generateRandomImages();
actionButton.addEventListener("click", () => {
  // Show all images
  if (actionButtonCurrentState === actionButtonAllStats[0]) {
    cardMeanings.forEach((cardMeaning) => {
      cardMeaning.classList.add("show");
    });
    actionButton.innerHTML = actionButtonAllStats[1];
    actionButtonCurrentState = actionButtonAllStats[1];
  } else if (actionButtonCurrentState === actionButtonAllStats[1]) {
    const randomNumber = getRandomInt(10);
    imageToBeShown = cardMeanings[randomNumber];
    imageToBeShown.classList.remove("show");

    actionButtonCurrentState = actionButtonAllStats[2];
    actionButton.innerHTML = actionButtonAllStats[2];
  } else if (actionButtonCurrentState === actionButtonAllStats[2]) {
    imageToBeShown.classList.add("show");
    actionButtonCurrentState = actionButtonAllStats[3];
    actionButton.innerHTML = actionButtonAllStats[3];
  } else if (actionButtonCurrentState === actionButtonAllStats[3]) {
    cardMeanings.forEach((cardMeaning) => {
      cardMeaning.classList.remove("show");
    });

    if (currentGameState === gameStates[0]) {
      generateRandomColors();
      currentGameState = gameStates[1];
    } else if (currentGameState === gameStates[1]) {
      generateRandomImages();
      currentGameState = gameStates[0];
    }

    actionButtonCurrentState = actionButtonAllStats[0];
    actionButton.innerHTML = actionButtonAllStats[0];
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
