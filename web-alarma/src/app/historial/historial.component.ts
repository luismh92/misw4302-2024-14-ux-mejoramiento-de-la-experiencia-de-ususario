import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateToIncidente(){
    this.router.navigate(['/alert/incidente'])
  }

}
