import { Component } from '@angular/core';
import { interval, TimeInterval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arranqued:number =  0.40;
  tarifad:number = 1.25;
  esperad:number = 0.08;
  arranquen:number = 0.45;
  tarifan:number  =   1.50;
  esperan:number = 0.09;
  v1:number = 37;
  v2:number = 73;
  dmd:number = 2125;
  dmn:number = 2406;
  aceleracion:number;
  distancia:number;
  velo1:number;
  velo2:number;
  costo:number;
  costoespera:number;
  vc:number;
  veloc:number;
  dc:number;
  tc:number;
  contador:number = 0;


  constructor() {

  }

  //Funcion que realiza la logica de calculo de tarifa en el dia

  calcularD(){

    this.velo1  = (this.v1 * 1000 / 3600)
    this.velo2 = (this.v2 * 1000 / 3600) 

    this.aceleracion = (this.velo2 - this.velo1)
    this.distancia = (0.5*this.aceleracion + this.velo2)

    this.vc  = (this.esperad /( this.tarifad / this.dmd) * 1000)
    this.veloc  = (this.vc * 1000 / 3600)

    this.tc = (0.01 /  (this.esperad / 60));

    this.dc = (this.veloc * this.tc);

    if (this.velo2 < this.veloc){
      this.costoespera =  (this.esperad  /  60);
      this.costo = this.arranqued + ( this.distancia * 0.01 / this.dc) + this.costoespera
      return this.contador = this.costo + this.contador

      
    }else{
      this.costo = this.arranqued + ( this.distancia * 0.01 / this.dc);
      return this.contador = this.costo + this.contador
    }
    
  }

  //Funcion que hace repetir la funcion anterior cada segundo

  repetirD(){
    setInterval(() => console.log(this.calcularD()), 1000);
  }

  //Funcion que realiza la logica de calculo de tarifa en la  noche

  calcularN(){

    this.velo1  = (this.v1 * 1000 / 3600)
    this.velo2 = (this.v2 * 1000 / 3600)

    this.aceleracion = (this.velo2 - this.velo1)
    this.distancia = (0.5*this.aceleracion + this.velo2)

    this.vc  = (this.esperad /( this.tarifan / this.dmn) * 1000)
    this.veloc  = (this.vc * 1000 / 3600)

    this.tc = (0.01 /  (this.esperan / 60));

    this.dc = (this.veloc * this.tc);



    if (this.velo2 < this.veloc){
      this.costoespera =  (this.esperan  /  60);
      return this.costo = this.arranquen + ( this.distancia * 0.01 / this.dc) + this.costoespera
    }else{
      return this.costo = this.arranquen + ( this.distancia * 0.01 / this.dc)
    }

  }

   //Funcion que hace repetir la funcion anterior cada segundo

  repetirN(){
    setInterval(() => console.log(this.calcularN()), 1000);
  }

}
