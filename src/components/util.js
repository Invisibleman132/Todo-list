export const createDate = () => {
  return new Date();
};
export function timeString(timeObj) {
  const dateData = timeObj;
  const seconds =
    dateData.getSeconds() < 10
      ? `0${dateData.getSeconds()}`
      : dateData.getSeconds();
  const minutes =
    dateData.getMinutes() < 10
      ? `0${dateData.getMinutes()}`
      : dateData.getMinutes();
  const hours =
    dateData.getHours() < 10 ? `0${dateData.getHours()}` : dateData.getHours();
  return ` ${hours}:${minutes}:${seconds}`;
}

export function dateString(dateObj) {
  const dateData = dateObj;
  const day =
    dateData.getUTCDate() < 10
      ? `0${dateData.getUTCDate()}`
      : dateData.getUTCDate();
  const month =
    dateData.getMonth() + 1 < 10
      ? `0${dateData.getMonth() + 1}`
      : dateData.getMonth() + 1;
  return `${day}.${month}.${dateData.getFullYear()} `;
}
export const threeMult = (text) => {
  let threeText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] % 3 === 0) {
      threeText += text[i];
    }
  }
  return threeText.replace(/\s+/g, "");
};
