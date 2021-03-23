// Ex3.1 - Growth Of population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
// town. How many years does the town need to see its population greater or equal to p = 1200
// inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// More generally given parameters:
// - p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

function nb__year(p0, percent, aug, p) {
    let count = 0;
    percent = percent * 0.01;
    let calc = (a, b, c) => {

        return (a * b + c);
    }
    if (p0 >= p) {
        return `invalid input`;
    }

    while (p0 < p) {
        count++;
        p0 = p0 + calc(p0, percent, aug);
    }
    return count;
}

console.log(nb__year(1500000, 2.5, 10000, 2000000));