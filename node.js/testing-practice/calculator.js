function add(str) {
  const arr = str.split(",");
  let num1 = +arr[0];
  let num2 = +arr[1];
  return num1 + num2;
}

module.exports = {
  add,
};
