function formatDuration(seconds) {
    if (seconds === 0) {
        return "now";
    }
    let array = [];
    let sec = 0;
    let min = 0;
    let hours = 0;
    let day = 0;
    let year = 0;
    for (let i = 1; i <= seconds; i++) {
        sec++
        if (sec > 59) {
            sec = 0;
            min++;
        }
        if (min > 59) {
            min = 0;
            hours++;
        }
        if (hours > 23) {
            hours = 0;
            day++;
        }
        if (day > 364) {
            day = 0;
            year++;
        }
    }

    year > 0 ? array.push(year + ` year`) : null;
    day > 0 ? array.push(day + ` day`) : null;
    hours > 0 ? array.push(hours + ` hour`) : null;
    min > 0 ? array.push(min + ` minute`) : null;
    sec > 0 ? array.push(sec + ` second`) : null;

    array.length > 1 ? array[array.length - 1] = `and ${array[array.length-1]}` : null;
    if (array.length > 1) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i][0] + array[i][1] > 1) {
                array[i] += "s"
            }
        }
    }

    if (array[array.length - 1][4] + array[array.length - 1][5] > 1) {
        array[array.length - 1] += "s"
    }

    if (array.length == 1) {
        if (array[0][0] + array[0][1] > 1) {
            array[0] += "s"
        }
    }
    let x = array.pop()
    array = array.join(', ')
    array.length > 1 ? array += ` ${x}` : array += `${x}`
    return array

}
x = formatDuration(9504002)
console.log(x)
