import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input() label: string = 'Toggle';
  @Input() checked: boolean = false;
  @Output() change = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.checked = !this.checked;
    this.change.emit(this.checked); // Emit the new state
    // Emit an event or perform additional logic if needed
    console.log('Toggle switched:', this.checked);
  }

}
