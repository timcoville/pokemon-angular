import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {


  constructor(private _http: HttpClient) {
    this.getPokemon();
  }

  getPokemon() {
    const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      console.log(data);
      console.log(data.name[0].toUpperCase() + data.name.substring(1) + "'s weight is " + data.weight + " pokepounds and his height is " + data.height + " pokeinches tall.");
      let matching = this._http.get(data.abilities[0].ability.url);
      matching.subscribe(data2 => {
        console.log(data2);
          for (var idx in data2.pokemon) {
            if (data2.pokemon[idx].pokemon.name != data.name) {
            console.log(data2.pokemon[idx].pokemon.name[0].toUpperCase() + data2.pokemon[idx].pokemon.name.substring(1) );
          }
        };
      })
    );
  }

}
