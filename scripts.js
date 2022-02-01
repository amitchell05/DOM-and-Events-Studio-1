window.addEventListener('load', () => {
  let takeOffButton = document.getElementById('takeoff');
  let flightStatus = document.getElementById('flightStatus');
  let shuttleFlightScreen = document.getElementById('shuttleBackground');
  let shuttleHeight = document.getElementById('spaceShuttleHeight');
  let landingButton = document.getElementById('landing');
  let abortMissionButton = document.getElementById('missionAbort');
  let rocketImage = document.getElementById('rocket');

  rocketImage.style.position = 'absolute';
  rocketImage.style.bottom = '0px';
  rocketImage.style.left = '0px';

  let upButton = document.getElementById('up');
  let downButon = document.getElementById('down');
  let rightButton = document.getElementById('right');
  let leftButton = document.getElementById('left');

  let spaceHeight = shuttleFlightScreen.clientHeight;
  let spaceWidth = shuttleFlightScreen.clientWidth;

  takeOffButton.addEventListener('click', () => {
    let result = window.confirm(
      'Confirm that the shuttle is ready for takeoff.'
    );
    if (result) {
      flightStatus.innerHTML = 'Shuttle in flight.';
      shuttleFlightScreen.style.backgroundColor = 'blue';
      shuttleHeight.innerHTML = '10000';
    }
  });

  landingButton.addEventListener('click', () => {
    window.alert('The shuttle is landing. Landing gear engaged.');
    flightStatus.innerHTML = 'The shuttle has landed.';
    shuttleFlightScreen.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = '0';
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
  });

  abortMissionButton.addEventListener('click', () => {
    let result = window.confirm('Confirm that you want to abort the mission.');
    if (result) {
      flightStatus.innerHTML = 'Mission aborted.';
      shuttleFlightScreen.style.backgroundColor = 'green';
      shuttleHeight.innerHTML = '0';
      rocketImage.style.bottom = '0px';
      rocketImage.style.left = '0px';
    }
  });

  // click event listener approach
  upButton.addEventListener('click', () => {
    if (rocketImage.offsetTop > 0) {
      rocketImage.style.bottom = incrementDistance(rocketImage, 'up');
      shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    }
  });

  downButon.addEventListener('click', () => {
    if (spaceHeight - rocketImage.offsetTop > rocketImage.clientHeight) {
      rocketImage.style.bottom = decrementDistance(rocketImage, 'down');
      shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
    }
  });

  leftButton.addEventListener('click', () => {
    if (rocketImage.offsetLeft > 0) {
      rocketImage.style.left = decrementDistance(rocketImage, 'left');
    }
  });

  rightButton.addEventListener('click', () => {
    if (spaceWidth - rocketImage.offsetLeft > rocketImage.clientWidth) {
      rocketImage.style.left = incrementDistance(rocketImage, 'right');
    }
  });
});

function incrementDistance(rocket, direction) {
  if (direction === 'up') {
    return parseInt(rocket.style.bottom) + 10 + 'px';
  } else {
    return parseInt(rocket.style.left) + 10 + 'px';
  }
}

function decrementDistance(rocket, direction) {
  if (direction === 'down') {
    return parseInt(rocket.style.bottom) - 10 + 'px';
  } else {
    return parseInt(rocket.style.left) - 10 + 'px';
  }
}

// onclick approach
// function moveUp(rocketImage) {
//   rocketImage.style.bottom = parseInt(rocketImage.style.bottom) + 10 + 'px';
//   shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
// }

// function moveDown(rocketImage) {
//   rocketImage.style.bottom = parseInt(rocketImage.style.bottom) - 10 + 'px';
//   shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
// }

// function moveRight(rocketImage) {
//   rocketImage.style.left = parseInt(rocketImage.style.bottom) + 10 + 'px';
// }

// function moveLeft(rocketImage) {
//   rocketImage.style.left = parseInt(rocketImage.style.bottom) - 10 + 'px';
// }
