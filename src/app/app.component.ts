import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Práctica de Sistemas Operativos';
  descripcion = 'Implementar un analizador léxico que despues de ingresar una secuencia de caracteres'
  + 'retorne un mensaje, diciendo si dicha cadena es un número entero, un identificador,'
  + 'una palabra reservada o un error.';

}
