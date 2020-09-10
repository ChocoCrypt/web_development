//Crear un objeto en javascript que contenga el número de dı́as y semanas que faltan hasta una
//fecha especı́fica.


class date {
    constructor(dia,mes,ano){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

let timeToDate = {
    fecha:new Date(),
    dado : new date(1,1,1),

    get mes(){
        mes = this.fecha.getMonth();
        return(mes) ;
    },
    get dia(){
        dia = this.fecha.getDate();
        return(dia) ;
    },
    get semana(){
        return(this.dia/7);
    },
    setfecha:function(ndia,nmes,nano){
        newfecha = date(ndia,nmes,nano);
        this.dado = newfecha;
    },
    get daystodate(){
        let res = (this.dado.dia + (this.mes * 30)) - (this.dia + (this.dado.mes * 30));
        return(res) ;
    },
    get weakstodate(){
        let res = ((this.dado.dia + (this.mes * 30)) - (this.dia + (this.dado.mes * 30)))/7;
        return(res) ;
    },
    setfecha(ndia,nmes,nano){
        let nuevafecha = new date(ndia,nmes,nano) ;
        this.dado = nuevafecha ;
    }

}

console.log(timeToDate.weakstodate);


