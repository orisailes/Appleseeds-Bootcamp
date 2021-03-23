function howManyStep(a, b) {
    let count = 0;
    if (a === b) {
        return 0;
    }

    while (a < b) {
        if (a === b) {
            return count;
        }

        if (a * 2 >= a + 1) {
            if (a * 2 <= b) {
                a = a * 2;
                count++;
            } else {
                a = a + 1;
                count++;
            }
        } else {
            a = a + 1;
            count++;
        }



    }
    return count;
}