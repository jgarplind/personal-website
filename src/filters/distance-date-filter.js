const { formatDistanceToNow } = require("date-fns")

module.exports = (value) => {
  const dateObject = new Date(value)
  return formatDistanceToNow(dateObject, { addSuffix: true })
}
