import { IPersona } from "./IPersona";

export class Mujer implements IPersona {

    public edad!: number;

    constructor(public nombre: string, public apellido: string) {

    }

    public nombre_completo(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    public ir_cine(sala: string, película: string): void {
        console.log(`Viendo ${película} en ${sala}`);
    }

}