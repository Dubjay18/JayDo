export function generateRandomId(): string {
  const characters = "abcdef0123456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  result += "-";
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  result += "-";
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  result += "-";
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  result += "-";
  for (let i = 0; i < 12; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return result;
}
