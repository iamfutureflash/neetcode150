function isPathCrossing(path: string): boolean {
    let x = 0;
    let y = 0;
    let coordinates = new Set(["0,0"]);
    for (const pole of path) {
        if (pole === "N") y++;
        else if (pole === "E") x++;
        else if (pole === "S") y--;
        else if (pole === "W") x--;
        const currentCoordinate = `${x}-${y}`;
        if (coordinates.has(currentCoordinate)) return true;
        coordinates.add(`${x}-${y}`);
    }
    return false;
};
console.log(isPathCrossing("NES"));
console.log(isPathCrossing("NESWW"));