import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login = 'FAÇA SEU LOGIN'
  signup = 'CRIAR CADASTRO'

  constructor() { }

  ngOnInit(): void {
  }

}
