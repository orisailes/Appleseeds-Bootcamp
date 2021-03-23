function languagePopularity(language) {
    let x;
    switch (language) {
        case `mandarin`:
            x = `MOST number of native speakers!`;
            break;
        case `spanish`:
            x = `2nd place in number of native speakers`;
            break;
        case `english`:
            x = `3rd place`;
            break;
        case `hindi`:
            x = `Number 4`;
            break;
        case `arabic`:
            x = `5th most spoken language here.`;
            break;

        default:
            x = `Not in top 5`;
    }
    return x;
}

console.log(languagePopularity(`english`))