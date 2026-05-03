import { Component, input, output } from '@angular/core';
import { Film } from '../../models/film.model';
@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.css',
})
export class FilmCard {

  film = input.required<Film>();

  cardClick = output<number>();
  favoriteToggle = output<number>();

  onCardClick(): void {
    this.cardClick.emit(this.film().id);
  }

  onFavoriteClick(event: MouseEvent): void {
    event.stopPropagation();
    this.favoriteToggle.emit(this.film().id);
  }
  
}
