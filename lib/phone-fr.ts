/** Keep at most 10 national digits (French mobile/landline), leading 0. */
export function normalizeFrenchPhoneDigits(input: string): string {
  let digits = input.replace(/\D/g, "");
  if (digits.startsWith("33") && digits.length >= 11) {
    digits = `0${digits.slice(2)}`;
  }
  return digits.slice(0, 10);
}

/** Display / input: `06 45 38 42 33` (pairs of 2). */
export function formatFrenchPhoneDisplay(input: string): string {
  const digits = normalizeFrenchPhoneDigits(input);
  const parts: string[] = [];
  for (let i = 0; i < digits.length; i += 2) {
    parts.push(digits.slice(i, i + 2));
  }
  return parts.join(" ");
}
