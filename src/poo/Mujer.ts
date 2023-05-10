import { IPersona } from "./IPersona";

export class Mujer implements IPersona {
   public nombre!: string;
   public apellido!: string;
   public  edad!: number;

   public nombre_completo(): string {
       return `${this.nombre} ${this.apellido}`;
   }

   public ir_cine(sala: string, película: string): void {
        console.log(`Viendo ${película} en ${sala}`);
   }

}