export default function RemoveSpecialChars(text) {
  if (!text.length) return text;

  let parsed = text;

  parsed = parsed.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a");
  parsed = parsed.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
  parsed = parsed.replace(new RegExp("[ÍÌÎ]", "gi"), "i");
  parsed = parsed.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o");
  parsed = parsed.replace(new RegExp("[ÚÙÛ]", "gi"), "u");
  parsed = parsed.replace(new RegExp("[Ç]", "gi"), "c");

  return parsed;
}
