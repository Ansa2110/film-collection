import { Component, computed, signal, inject } from '@angular/core';
import { FilmCard } from '../../shared/film-card/film-card';
import { FilmService } from '../../services/film.service';
import { Router } from '@angular/router';
import { AutofocusDirective } from '../../layout/directives/autofocus.directive';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-home',
  imports: [FilmCard, AutofocusDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly filmService = inject(FilmService);
  private readonly router = inject(Router);
  private readonly breadcrumbService = inject(BreadcrumbService);

  constructor() {
    this.breadcrumbService.setBreadcrumbs([
      { label: 'Home', url: null }
    ]);
  }

  searchQuery = signal('');

  filteredFilms = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();

    if (!query) {
      return this.filmService.films();
    }

    return this.filmService.films().filter(film =>
      film.title.toLowerCase().includes(query)
    );
  });

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  openFilmDetails(filmId: number): void {
    this.router.navigate(['/films', filmId]);
  }

  toggleFavorite(filmId: number): void {
    this.filmService.toggleFavorite(filmId);
  }

}
