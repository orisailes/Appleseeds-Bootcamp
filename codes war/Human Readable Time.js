function humanReadable(seconds) {
    let hr = 0
    let min = 0
    let sec = 0
    if (seconds >= 3600) {
        while (seconds >= 3600) {
            seconds -= 3600
            hr++
        }
    }
    while (seconds >= 60) {
        seconds -= 60
        min++
    }
    const timeArray = [`${hr}`, `${min}`, `${seconds}`]
    timeArray[0].length === 1 ? timeArray[0] = "0" + timeArray[0] : null
    timeArray[1].length === 1 ? timeArray[1] = "0" + timeArray[1] : null
    timeArray[2].length === 1 ? timeArray[2] = "0" + timeArray[2] : null
    return timeArray.join(':')

}



humanReadable(0) //  '00:00:00', 'humanReadable(0)';
humanReadable(5) //  '00:00:05', 'humanReadable(5)';
humanReadable(60) //  '00:01:00', 'humanReadable(60)';
humanReadable(86399) //  '23:59:59', 'humanReadable(86399)';
humanReadable(359999) //  '99:59:59', 'humanReadable(359999)';