import { Hombre } from "./Hombre";
import { IPersona } from "./IPersona";
import { Mujer } from "./Mujer";

const hombre1: IPersona = new Hombre( 'Tomas', 'Vargas' );
hombre1.edad = 29;
hombre1.nombre_completo();

const hombre2: IPersona = new Hombre();
hombre2.edad = 18;
hombre2.nombre_completo();

const hombre3: IPersona = new Hombre('Juan Jose Perez');
hombre3.edad = 18;
hombre3.nombre_completo();

const hombre4: IPersona = new Hombre(undefined, 'Pepe Molina');
hombre4.edad = 18;
hombre4.nombre_completo();

const mujer: IPersona = new Mujer(); 