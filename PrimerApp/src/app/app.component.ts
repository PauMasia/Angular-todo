import { Component } from '@angular/core';
import { EmpleadosComponent } from './empleados/empleados.component'; // Importar el componente standalone

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [EmpleadosComponent] // Incluir el componente standalone en el imports
})
export class AppComponent {}
