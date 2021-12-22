export const threeMult = (text: string): string => {
  let threeText = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] as unknown as number % 3 === 0 && text[i] as unknown as number!==0) {
      threeText += text[i];
    }
  }

  return threeText.replace(/\s+/g, "");
};
