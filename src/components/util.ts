export const createDate = ():Date => {
  return new Date();
};
export function timeString(timeObj:Date):string {
  const seconds =
  timeObj.getSeconds() < 10
      ? `0${timeObj.getSeconds()}`
      : timeObj.getSeconds();
  const minutes =
  timeObj.getMinutes() < 10
      ? `0${timeObj.getMinutes()}`
      : timeObj.getMinutes();
  const hours =
  timeObj.getHours() < 10 ? `0${timeObj.getHours()}` : timeObj.getHours();
  return ` ${hours}:${minutes}:${seconds}`;
}

export function dateString(dateObj:Date):string {
  const day =
  dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
  const month =
  dateObj.getMonth() + 1 < 10
      ? `0${dateObj.getMonth() + 1}`
      : dateObj.getMonth() + 1;
  return `${day}.${month}.${dateObj.getFullYear()}`;
}
export const threeMult = (text:string):string => {
  let threeText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] as unknown as number % 3 === 0) {
      threeText += text[i];
    }
  }
  return threeText.replace(/\s+/g, "");
};
