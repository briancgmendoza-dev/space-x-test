export const yearsAgo = (year) => {
  const currentYear = new Date().getFullYear()
  const yearsDifference = currentYear - year;
  return `${yearsDifference} years ago`
}
