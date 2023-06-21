import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login = 'FAÇA SEU LOGIN';
  @Input() signOptions: string[];
  @Input() signPaths: string[];
  @Input() ids: string[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  avancar() {
    this.router.navigateByUrl(this.signPaths[0]);
  }

  maisInfos() {
    this.router.navigateByUrl(this.signPaths[1]);
  }

}
