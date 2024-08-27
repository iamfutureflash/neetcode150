function countStudents(students: number[], sandwiches: number[]): number {
    let c = 0;
    while (students.length > 0) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            c = 0;
        } else {
            students.push(students.shift()!);
            c++;
        }
        if(c === students.length){
            break;
        }
    }
    return students.length;
};
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));