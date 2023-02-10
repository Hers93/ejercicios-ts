class Personaje {
    profesion?: string
    private static equipo: number = 1
    constructor(
        public readonly id: number,
        public name: string,
        public nivel: number,
        private _hp: number){
      
    }

    subirNivel(): number{
        this.nivel = this.nivel++
        return this.nivel
    }

    static agregarPersonaje():void{
        Personaje.equipo++
    }

    cambiarHP(cantidad: number): number{
        this._hp = this._hp + cantidad
        //no pasarse del maximo
        return this._hp
    }

    get hp():number{
        return this._hp
    }

    static getEquipo():number{
        return Personaje.equipo
    }

   /*  set hp (cantidad: number){
        this._hp = this._hp + cantidad
    } */
}

const personaje = new Personaje(1,'Herson',1,100)
personaje.cambiarHP(-10)
/* personaje.hp = 20 */
/* console.log(personaje) */

const personaje1  = new Personaje(2,'Chanchito',1,120)
Personaje.agregarPersonaje()
console.log(Personaje.getEquipo())
  

   
    
