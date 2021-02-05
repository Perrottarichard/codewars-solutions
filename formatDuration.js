function formatDuration(secondsParam) {
  if (secondsParam <= 0) {
    return "now";
  }
  let phrase = [];
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let days = 0;
  let years = 0;

  while (secondsParam > 0) {
    if (secondsParam / (60 * 60 * 24 * 365) >= 1) {
      years++;
      secondsParam -= 60 * 60 * 24 * 365;
    } else if (secondsParam / (60 * 60 * 24) >= 1) {
      days++;
      secondsParam -= 60 * 60 * 24;
    } else if (secondsParam / (60 * 60) >= 1) {
      hours++;
      secondsParam -= 60 * 60;
    } else if (secondsParam / 60 >= 1) {
      minutes++;
      secondsParam -= 60;
    } else {
      seconds = secondsParam;
      secondsParam -= seconds;
    }
  }
  //handle years
  if (years === 1) {
    phrase.push(`1 year, `);
  } else if (years === 1 && days === 0) {
    phrase.push("1 year");
  } else if (
    years > 1 &&
    days === 0 &&
    hours === 0 &&
    minutes === 0 &&
    seconds === 0
  ) {
    phrase.push(`${years} years`);
  } else if (years > 1) {
    phrase.push(`${years} years, `);
  }

  //handle days
  if (days === 1) {
    phrase.push(`1 day, `);
  } else if (days === 1 && hours === 0) {
    phrase.push("1 day");
  } else if (days > 1 && hours === 0 && minutes === 0 && seconds === 0) {
    phrase.push(`and ${days} days`);
  } else if (days > 1) {
    phrase.push(`${days} days, `);
  }

  //handle hours
  if (hours === 1 && seconds > 0) {
    phrase.push(`1 hour, `);
  } else if (hours === 1 && seconds === 0) {
    phrase.push("1 hour");
  } else if (hours > 1 && minutes === 0 && seconds === 0) {
    phrase.push(`and ${hours} hours`);
  } else if (hours > 1 && !(minutes && seconds)) {
    phrase.push(`${hours} hours`);
  } else if (hours > 1) {
    phrase.push(`${hours} hours, `);
  }

  //handle minutes
  if (minutes === 1) {
    phrase.push(`1 minute `);
  } else if (minutes === 1 && seconds === 0) {
    phrase.push("1 minute");
  } else if (minutes > 1 && seconds > 0) {
    phrase.push(`${minutes} minutes `);
  } else if (minutes > 1 && years === 0 && days === 0 && hours === 0) {
    phrase.push(`${minutes} minutes`);
  } else if (minutes > 1 && seconds === 0) {
    phrase.push(` and ${minutes} minutes`);
  }

  //handle seconds
  if (seconds === 1 && !(years || days || hours || minutes)) {
    phrase.push(`1 second`);
  } else if (seconds === 1 && (years || days || hours || minutes)) {
    phrase.push(`and 1 second`);
  } else if (seconds > 1 && !(years || days || hours || minutes)) {
    phrase.push(`${seconds} seconds`);
  } else if (seconds > 1 && (years || days || hours || minutes)) {
    phrase.push(`and ${seconds} seconds`);
  }
  return phrase.join("");
}
console.log(formatDuration(1)); //1 second
console.log(formatDuration(62)); //1 minute and 2 seconds
console.log(formatDuration(120)); //2 minutes
console.log(formatDuration(3600)); //1 hour
