export function ThemeRule(light, dark) {
  const atuallyHours = new Date().getHours();

  return atuallyHours >= 18 ? dark : light;
}
