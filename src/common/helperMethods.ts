import {
  format,
  setDate,
  isSaturday,
  isSunday,
  addDays,
  addMonths,
  isPast,
} from "date-fns";

export function getNextFirstWorkdayOfMonth(givenDate: Date): string {
  // find first workday of this month
  let date = setDate(givenDate, 1);

  if (isSaturday(date)) {
    date = addDays(date, 2);
  }
  if (isSunday(date)) {
    date = addDays(date, 1);
  }

  // if this workday is already in past, go to next month
  if (isPast(date)) {
    return getNextFirstWorkdayOfMonth(addMonths(givenDate, 1));
  } else {
    return format(date, "dd.MM.yyyy");
  }
}
