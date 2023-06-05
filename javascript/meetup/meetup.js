//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, descriptor, day) => {
  const DAYS_OF_THE_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = DAYS_OF_THE_WEEK.indexOf(day);

  let resultDate = new Date();

  if (
    descriptor === "first" ||
    descriptor === "second" ||
    descriptor === "third" ||
    descriptor === "fourth"
  ) {
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

    let firstMatchingDay;
    if (firstDayOfMonth <= dayIndex) {
      firstMatchingDay = new Date(
        year,
        month - 1,
        1 + dayIndex - firstDayOfMonth
      );
    } else {
      firstMatchingDay = new Date(
        year,
        month - 1,
        1 + dayIndex + 7 - firstDayOfMonth
      );
    }

    let daysToAdd;
    switch (descriptor) {
      case "first":
        daysToAdd = 0;
        break;
      case "second":
        daysToAdd = 7;
        break;
      case "third":
        daysToAdd = 14;
        break;
      case "fourth":
        daysToAdd = 21;
        break;
    }

    resultDate.setTime(
      firstMatchingDay.getTime() + daysToAdd * 24 * 60 * 60 * 1000
    );
  }

  return resultDate;
};
