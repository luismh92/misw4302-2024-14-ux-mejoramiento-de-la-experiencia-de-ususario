import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-incidentes',
  templateUrl: './mis-incidentes.component.html',
  styleUrls: ['./mis-incidentes.component.css']
})
export class MisIncidentesComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateToIncidente(){
    this.router.navigate(['/incidente'])
  }

}
