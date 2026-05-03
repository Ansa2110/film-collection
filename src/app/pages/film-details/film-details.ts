import { Component, computed, signal, inject } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DurationPipe } from '../../pipes/duration.pipe';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-film-details',
  imports: [DurationPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.css',
})
export class FilmDetails {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly filmService = inject(FilmService);
  private readonly breadcrumbService = inject(BreadcrumbService);

  constructor() {
    const idFromUrl = Number(this.route.snapshot.paramMap.get('id'));
    this.filmId.set(idFromUrl);

    const selectedFilm = this.filmService.getFilmById(idFromUrl);

    this.breadcrumbService.setBreadcrumbs([
      { label: 'Home', url: '/' },
      { label: selectedFilm?.title ?? 'Film', url: null }
    ]);
  }

  filmId = signal<number | null>(null);

  film = computed(() => {
    const id = this.filmId();

    if (id === null) {
      return undefined;
    }

    return this.filmService.getFilmById(id);
  });

  goBack(): void {
    this.router.navigate(['/']);
  }

}
