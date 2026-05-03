import { computed, Injectable, signal } from '@angular/core';

import filmsData from '../data/films.json';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private readonly filmsSignal = signal<Film[]>(filmsData as Film[]);

  readonly films = this.filmsSignal.asReadonly();

  readonly favoriteFilms = computed(() =>
    this.filmsSignal().filter(film => film.isFavorite)
  );

  getFilmById(id: number): Film | undefined {
    return this.filmsSignal().find(film => film.id === id);
  }

  toggleFavorite(id: number): void {
    this.filmsSignal.update(films =>
      films.map(film =>
        film.id === id
          ? { ...film, isFavorite: !film.isFavorite }
          : film
      )
    );
  }
}