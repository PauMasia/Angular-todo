import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel

@Component({
  selector: 'app-empleados',
  standalone: true, // Declaramos que el componente es standalone
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  imports: [FormsModule] // Importar FormsModule para usar ngModel
})
export class EmpleadosComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  nombre: string = 'Juan';
  apellido: string = 'Pérez';
  edad: number = 30;
  llamaEmpresa(value:String){

  }
  constructor(){}

}
