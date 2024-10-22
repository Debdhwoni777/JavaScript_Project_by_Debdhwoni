function magicalSortingHat(students) {
    const houses = {
        Gryffindor: [],
        Hufflepuff: [],
        Ravenclaw: [],
        Slytherin: []
    };

    students.forEach(student => {
        const nameLength = student.length;
        
        if (nameLength < 6) {
            houses.Gryffindor.push(student);
        } else if (nameLength < 8) {
            houses.Hufflepuff.push(student);
        } else if (nameLength < 12) {
            houses.Ravenclaw.push(student);
        } else {
            houses.Slytherin.push(student);
        }
    });

    return houses;
}

// Example usage
// You can add Your Name |||
const studentNames = ["Dhwoni", "Sayan", "Roni", "Debobroto", "Himansho", "Diya", "Luna", "Voldemort"];
const sortedHouses = magicalSortingHat(studentNames);
console.log(sortedHouses);