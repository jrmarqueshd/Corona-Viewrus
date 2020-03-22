export default function AddingFloatPointInValue(value) {
  if (value.length < 4) return;

  let v = value;

  if (value.length === 4) return (v = v.replace(/(\d{1})(\d)/, "$1.$2"));
  if (value.length === 5) return (v = v.replace(/(\d{2})(\d)/, "$1.$2"));
  if (value.length === 6) return (v = v.replace(/(\d{3})(\d)/, "$1.$2"));
  if (value.length === 7) {
    v = v.replace(/(\d{1})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    return v;
  }

  return v;
}
