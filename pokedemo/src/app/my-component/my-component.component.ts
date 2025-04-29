import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string = '';
  selectedPokeId: string = '';
  searchPokeName: string = '';

  pokes: Pokemon[] = [];

  constructor() {
    this.pokes.push(new Pokemon('1', 'Pikachu'));
    this.pokes.push(new Pokemon('2', 'baseurl'));
    this.pokes.push(new Pokemon('3', 'saurian'));
    this.pokes.push(new Pokemon('4', 'venturous'));
    this.pokes.push(new Pokemon('5', 'chandler'));
  }

  ngOnInit(): void {}

  go(){
    console.log(this.selectedPokeId);
  }
}
