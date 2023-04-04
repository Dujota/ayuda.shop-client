export default function capitalizeString(str: any) {
  if (typeof str !== "string" || !str) return "";

  return str.charAt(0).toUpperCase() + str.slice(1);
}
