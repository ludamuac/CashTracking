import { Component } from '@angular/core';
import { format } from 'url';
import { formatNumber } from '@angular/common';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  transacciones = [];

  valorAhorita = null;

  incomeValue(input: HTMLInputElement){
    const value = input.value;

    if(value === '' || value < '0'){
      alert('Ingresa un valor numérico mayor a 0')
    } else{
      this.transacciones.unshift(value);
      this.valorAhorita = this.valorAhorita + (+input.value);
      input.value = '';

    }
  }

  expenseValue(input: HTMLInputElement){
    const value = input.value;

    if(value === '' || value < '0'){
      alert('Ingresa un valor numérico mayor a 0')
    } else{
      this.transacciones.unshift(value);
      this.valorAhorita = this.valorAhorita - (+input.value);
      input.value = '';
    }
  }
}
