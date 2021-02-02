import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faChevronRight = faChevronRight;

  inputControl = new FormControl();
  errors = '';

  constructor() {}

  ngOnInit(): void {}

  onSearch(): void {
    if (!this.inputControl.value) {
      this.errors = 'Preencha o campo para buscar';
    }
  }
}
