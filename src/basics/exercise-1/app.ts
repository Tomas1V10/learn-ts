const teacher = {
    name: 'Tomas',
    lastName: 'Vargas',
    age: 29
};

console.log('teacher', teacher);

//Primitivos
//Booleans
//Declaración Implícita
const isTeacher = true; // Toma el valor con el cual fue declarado
let isPlayer = true; // Tomo el tipo del valor que le fue asignado
isPlayer = false;

//Declaración explicita
const hasErrors: boolean = false;
let isChampion: boolean = false;

let result = hasErrors ? 'Tiene errores' : 'No tiene errores';

//String 
const firstName = 'Tomas';
const lastName = 'Vargas';

let fullName = `Su nombre es: ${firstName} ${lastName}, bienvenido}`;
console.log(fullName.toUpperCase());

//Number
let countStudents: number = 29;
let average: number = 4.5;

console.log(average.toFixed() )

//Array
let fruits = ['pera', 'banano'];
let sports: string[] = ['futbol', 'baloncesto'];

type stringOrNull = string | null;

//Union types
let students: Array<string | null> = ['Tomas', 'John', null, 'Lopera', null, 'guille'];
console.log(students.filter((student) => student !== null) );

//Tuplas
let exampleTuple: [string, null] = ['hola', null ];

type statusCode = 'active' | 'inactive';

let studenStatus: statusCode = 'inactive';
