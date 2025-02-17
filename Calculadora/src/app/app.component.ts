import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule]
})
export class AppComponent {
  num1: number = 0; 
  num2: number = 0;
  resultado: number = 0; 
  sumar(): void {
    this.resultado = this.num1 + this.num2;
  }

  restar(): void {
    this.resultado = this.num1 - this.num2;
  }
}
