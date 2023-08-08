// Normal Function (Named Function)
function videoGenerate(video = "RANDOM", isPlayable = "FALSE") {
  if (isPlayable) {
    videoPlay(video);
  } else {
    return Err;
  }
}

function videoPlay(video) {
  console.log(`${video} is now playing!`);
}

// example of arrow function
const isPlayable = (playbackValue) => {
  return playbackValue ? true : false;
};

// Anonymous Function (NO NAMED)
const Err = function () {
  return "HALT 404";
};

// Main Function
try {
  // Directing Loggin inside the function
  videoGenerate(undefined, isPlayable(1));
} catch {
  // Returing the log value from the function
  console.log(videoGenerate(undefined, isPlayable(0)));
}
