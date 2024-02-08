

const students = [
    { name: 'John', grades: [90, 87, 93, 88] },
    { name: 'Jane', grades: [78, 82, 80, 85] },
    { name: 'Mike', grades: [92, 89, 85, 78] },
    { name: 'Anna', grades: [75, 80, 92, 87] },
];

function calculateAverage(marks) {
    let sum = 0;
    for (i = 0; i < marks.length; i++) {
        sum += marks[i]
    }
    return Math.round(sum / marks.length) ;
}

function studentAverage(persons) {
    for (let i = 0; i < persons.length; i++) {
const student = students[i];
const average = calculateAverage(student.grades);
console.log(`${student.name} - ${average}`);
    }
}
studentAverage(students)

