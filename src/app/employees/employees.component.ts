import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

}
