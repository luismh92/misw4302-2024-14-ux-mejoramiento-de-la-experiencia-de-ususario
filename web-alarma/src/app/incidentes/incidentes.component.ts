import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incidentes',
  templateUrl: './incidentes.component.html',
  styleUrls: ['./incidentes.component.css']
})
export class IncidentesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToIncidente() {
    this.router.navigate(['/alert/incidente']);
  }

}
