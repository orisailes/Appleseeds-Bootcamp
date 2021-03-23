const longestWord = require('../ex5.8')


test('test longest word[s] in a sentence',() => {
    expect(longestWord(`hello i am orisailes`)).toBe(`orisailes`)
})
test('test longest word[s] in a sentence',() => {
    expect(longestWord(`This is a very very veryyyyyyyyyyyy long word`)).toBe(`veryyyyyyyyyyyy`)
})
test('test longest word[s] in a sentence',() => {
    expect(longestWord(`ללבהצל  הגדלך צלךצךצהד גכצלךצלצךצךלצלךצך`)).toBe(`גכצלךצלצךצךלצלךצך`)
})