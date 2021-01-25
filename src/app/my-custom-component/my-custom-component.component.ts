import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-custom-component',
  templateUrl: './my-custom-component.component.html',
  styleUrls: ['./my-custom-component.component.scss'],
})
export class MyCustomComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    alert("Se ha detectad un componente perzonalidado: app-my-custom-component")
  }

}
