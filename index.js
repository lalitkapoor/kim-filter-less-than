module.exports = function (value) {
  return function (obj, callback) {
    callback(!(obj.item[obj.field] < value))
  }
}
