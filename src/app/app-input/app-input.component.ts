import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppInputComponent implements OnInit {

  tipo: String = 'Esperando...';

  valor: String = '';

  entero = '^[0-9]+$';

  reservadas = '(while|for|if)';

  identificador = '(^([a-zA-Z]|_|[$])([a-zA-Z]|[0-9]|[$]|_)*$)';

  constructor() {
  }

  ngOnInit() {
  }

  onKey(event: any) {
    this.valor = event.target.value;

    switch (true) {
      case (this.isPositiveInteger(this.valor)):
        this.tipo = 'Entero (' + this.valor + ')';
        break;
      case (this.isReservedWord(this.valor)):
        this.tipo = 'Palabra reservada (' + this.valor + ')';
        break;
      case (this.isEmpty(this.valor)):
        this.tipo = 'Esperando...';
        break;
      case (this.isIdentifier(this.valor)):
        this.tipo = 'Identificador';
        break;
      default:
        this.tipo = 'Error';
        break;
    }
  }

  clear() {
    this.tipo = 'Esperando...';
    this.valor = '';
  }

  isEmpty(str) {
    return str == null || str === '';
  }

  isPositiveInteger(str) {
    /*const n = Math.floor(Number(str));
    return String(n) === str && n >= 0;*/
    const reg = new RegExp(this.entero);
    return reg.test(str);
  }

  isReservedWord(str) {
    // return this.reservadas.indexOf(str) > -1;
    const reg = new RegExp(this.reservadas);
    return reg.test(str);
  }

  isIdentifier(str) {
    const reg = new RegExp(this.identificador);
    return reg.test(str);
  }

}
