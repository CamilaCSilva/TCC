import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-gerais',
  templateUrl: './dados-gerais.component.html',
  styleUrls: ['./dados-gerais.component.scss']
})
export class DadosGeraisComponent implements OnInit {

  path1: string = 'home/ficha/identificacao-paciente/dados-atendimento/dados-atendimento-parte2/dados-vitais-paciente';
  path2: string = 'home';
  nomeParamedico: string;
  crmCorenDrf: string;
  date: Date = new Date();
  alertMessage: string = "";
  // location: Location;
  // lat: any;
  // lng: any;

  constructor(private router: Router) {
    // this.location = location;
  }

  ngOnInit(): void {
    if(this.alertMessage != "") {
      alert(this.alertMessage);
    }
  }

  voltar() {
    this.router.navigateByUrl(this.path1);
  }

  alert() {
    alert('Dados incompletos');
  }

  enviar() {
    this.router.navigateByUrl(this.path2);
  }

  // getUserLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //       alert('Location accessed')
  //     },function(){
  //       alert('User not allowed')
  //     },{timeout:10000});
  //   } else {
  //     console.log("User not allow")
  //   }
  // }
}
