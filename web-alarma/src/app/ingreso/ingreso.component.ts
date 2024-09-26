import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateToIncidentes() {
    this.router.navigate(['/incidentes']); // Change to your desired route
  }

}
