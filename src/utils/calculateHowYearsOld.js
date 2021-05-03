export default function howYearsOld(birthDay) {
  const now = new Date()
  const year = birthDay.getFullYear()
  const month = birthDay.getMonth()
  const date = birthDay.getDate()

  let yearsOld = now.getFullYear() - year - 1

  if (month === now.getMonth()) if (date <= now.getDate()) yearsOld++

  if (month < now.getMonth()) yearsOld++
  return yearsOld
}
