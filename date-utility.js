const DateUtility = (function () {
  function addLeadingZero(time) {
    return time < 10 ? `0${time}` : time;
  }

  function addDateSuffix(date) {
    const stDates = [1, 21, 31];
    if (stDates.includes(date)) {
      return `${date}st`;
    }

    const ndDates = [2, 22];
    if (ndDates.includes(date)) {
      return `${date}nd`;
    }

    const rdDates = [3, 23];
    if (rdDates.includes(date)) {
      return `${date}rd`;
    }

    return `${date}th`;
  }

  return {
    addLeadingZero: addLeadingZero,
    addDateSuffix: addDateSuffix
  }
})();
