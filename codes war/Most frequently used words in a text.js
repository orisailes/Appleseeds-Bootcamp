function topThreeWords(text) {
  let obj = {};
  text = text.toLowerCase().split(' ');
  let regExp = /[a-zA-Z]/g;
  let sorted = [];
  let returnedArray = [];

  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].replace(/[`~!@#$%^&*()_|+\-=?;:",.<>\{\}\[\]\\\/]/gi, '');
  }

  for (let i = 0; i < text.length; i++) {

    if (text[i].length === 0 || regExp.test(text) == false) {
      text.splice(i, 1);
      i--;
    }
  }

  for (let word of text) {
    obj[word] ? obj[word]++ : obj[word] = 1
  }

  for (let x in obj) {
    sorted.push([x, obj[x]])
  }
  sorted.sort(function (a, b) {
    return b[1] - a[1]
  })

  sorted.forEach(function (el, index) {
    index < 3 ? returnedArray.push(el[0]) : ``;
  })

  return returnedArray

}
