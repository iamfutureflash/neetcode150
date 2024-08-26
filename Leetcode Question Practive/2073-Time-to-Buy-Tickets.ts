function timeRequiredToBuy1(tickets: number[], k: number): number {
    let time = 0;
    while (tickets[k] > 0) {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i] > 0) {
                tickets[i]--;
                time++;
                if (k == i && tickets[k] === 0) return time;
            }
        }
    }
    return time;
};
function timeRequiredToBuy2(tickets: number[], k: number): number {
    let time = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) time += Math.min(tickets[k], tickets[i]);
        else if (i > k) time += Math.min(tickets[k] - 1, tickets[i]);
    }
    return time;
};
console.log(timeRequiredToBuy2([2, 3, 2], 2));
console.log(timeRequiredToBuy2([5, 1, 1, 1], 0));