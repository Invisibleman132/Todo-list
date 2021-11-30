export function timeString() {
  const dateData = new Date();
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
  const time = ` ${hours}:${minutes}:${seconds}`;
  return time;
}

export function dateString() {
  const dateData = new Date();
  const day =
    dateData.getUTCDate() < 10
      ? `0${dateData.getUTCDate()}`
      : dateData.getUTCDate();
  const month =
    dateData.getMonth() + 1 < 10
      ? `0${dateData.getMonth() + 1}`
      : dateData.getMonth() + 1;
  const date = `${day}.${month}.${dateData.getFullYear()} `;
  return date;
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
