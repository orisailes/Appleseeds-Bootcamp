function digital_root(n) {
    n = n.toString().split('');
    let helper = [];
    let result = 0;
    while (n.length !== 1) {
        for (let i = 0; i < n.length; i++) {
            result = result + Number(n[i]);
            console.log(result)
        }
        helper.push(result)
        n = helper.toString().split('');
        helper = [];
        result = 0;
    }

    return Number(n);
}

digital_root(456)