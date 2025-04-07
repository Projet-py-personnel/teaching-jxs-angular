import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
    id: string = '';

    pokes: Pokemon[] = [];

    constructor(){
      this.pokes.push(new Pokemon('1' , 'Pikachou') );
      this.pokes.push(new Pokemon('2' , 'bulbasaur') );
      this.pokes.push(new Pokemon('3' , 'ivysaur') );
      this.pokes.push(new Pokemon('4' , 'venusaur') );
      this.pokes.push(new Pokemon('5' , 'charmander') );

    }
}
