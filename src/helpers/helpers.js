export function formatTime(timeInCentiSeconds) {
  // let hours = Math.floor(timeInCentiSeconds / 360000);
  // let minutes = Math.floor((timeInCentiSeconds / 6000) % 60);
  // let seconds = Math.floor((timeInCentiSeconds % 6000) / 100);
  // let centiSeconds = timeInCentiSeconds % 100;

  let milliseconds = Math.round(timeInCentiSeconds * 10);
  let seconds = Math.floor((milliseconds / 1000) % 60);
  let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  if(hours < 10){
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  // if (centiSeconds < 10) {
  //   centiSeconds = `0${centiSeconds}`;
  // }
  return `${hours}:${minutes}:${seconds}`;
}

export function convertToCentiSeconds(timeInMilliseconds) {
  return Math.round(timeInMilliseconds * 0.1);
}

// const formattedSeconds = sec =>("0" + Math.floor(sec / 3600)).slice(-2) +":" +
// ("0" + Math.floor((sec % 3600) / 60)).slice(-2) +":" +("0" + (sec % 60)).slice(-2);

// export default formattedSeconds