/**
  *翻转数组的指定区间
  *@param {Array} 数组
  *@param {Number} 开始位置
  *@param {Number} 结束位置
  *@returns
  */
var reverse = function (arr, start, end) {
  let i = start, j = end
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }
}
