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

// Any
let working: any = 25;
working = 'hola';


//Funciones
//function  nombre de la función(parámetro: tipoDato): tipoDeDatoQueRetornaLaFunción
function validateValue( value: unknown ): boolean {

    //unknown que es un tipo de dato que es desconocido
    //para cualquier validación que daba hacer con el dato
    //debo primero saber o validar que tipo de dato es 
    if (typeof value === 'string') {
        console.log(value.trim().toUpperCase());
    }

    if (value === '') {
        return false;
    } else {
        return true;
    }

}

function getFullName(firstName: string, lastName: string,): string {

    return `${firstName} ${lastName}`;

}

//Void
function processResponse( saved: boolean ) {
    if (saved) {
        console.log('Guardado');
    } else {
        console.log('Ocurrió un error');
    }
}


console.log( getFullName(firstName, lastName) );
processResponse(true);

enum Role {
    Admin,
    Client,
    Users,
    Super  
}

let users: Array< {name: string, role: string } > = [

    {
        name: 'Pepito',
        role: Role.Admin
    },
    {
        name: 'Juanito',
        role: Role.Client
    },
    {
        name: 'Fulanito',
        role:  Role.Client
    }


]

console.log( users.filter( (user) => user.role === Role.Client ) );


