//Se requiere almacenar una lista de nickNames y las edades de un conjunto de personas que traba-
//jarán en el staff de un evento. Crear una clase llamada StaffList que contenga tres métodos:


class StaffList  {
    constructor(){
        this.lista = [] ;
    }
    add(nickname , age){
        try{
            //si la edad no es un entero retorno error
            if(!Number.isInteger(age)) throw Error("la edad tiene que ser un número")
            if(age > 18){
                this.lista.push(nickname) ;
            }
            else{
                console.log("La persona tiene que ser mayor de edad");
            }
        }
        catch(err){
            console.log("la edad no fue un numero");
        }
    }
    remove(nickname){
        if(this.lista.includes(nickname)){
            for(let i = 0 ; i<this.lista.length ; i++){
                if(this.lista[i] == nickname){
                    this.lista.splice(i)
                }
            }
        }
        else{
            console.log("el nickname no está en la lista");
        }

    }
    getSize(){
        return(this.lista.length) ;
    }

}


