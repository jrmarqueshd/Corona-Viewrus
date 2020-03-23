export default function AddingFloatPointInValue(value) {
  if (value.length < 4) return value;

  let v = value;

  if (value.length === 4) return (v = v.replace(/(\d{1})(\d)/, "$1.$2"));
  if (value.length === 5) return (v = v.replace(/(\d{2})(\d)/, "$1.$2"));
  if (value.length === 6) return (v = v.replace(/(\d{3})(\d)/, "$1.$2"));
  if (value.length === 7) {
    v = v.replace(/(\d{1})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    return v;
  }
  if (value.length === 8) {
    v = v.replace(/(\d{2})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    return v;
  }
  if (value.length === 9) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    return v;
  }
  if (value.length === 10) {
    v = v.replace(/(\d{1})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    return v;
  }

  return v;
}
