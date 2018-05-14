import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN';
  secondVar = 'Test';
  constructor(private _httpService: HttpService) {
    this._httpService.getPokemon();
    const pokemon = this._httpService.getName();
    pokemon.subscribe(data => {
      this.secondVar = data.name[0].toUpperCase() + data.name.substring(1)
    })
  }
}
