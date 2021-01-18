export function addLeadingZero(num: number): string {
  if (num < 10) {
    return '0' + num.toString();
  } else {
    return num.toString();
  }
}

export function formatDateToString(date: Date): string {
  const day = addLeadingZero(date.getDate());
  const month = addLeadingZero(date.getMonth() + 1);
  const year = date.getFullYear();
  return year.toString().concat('-', month.toString(), '-', day.toString());
}

export function formatTimeToString(date: Date): string {
  const hour = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  return hour.toString().concat(':', minutes.toString());
}

export function formatDateStringForView(date: string): string {
  const dateArray = date.split('-');
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];
  return day.concat('.', month, '.', year);
}
