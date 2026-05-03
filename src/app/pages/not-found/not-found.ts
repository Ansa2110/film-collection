import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  private readonly breadcrumbService = inject(BreadcrumbService);

  constructor() {
    this.breadcrumbService.setBreadcrumbs([
      { label: 'Home', url: '/' },
      { label: '404', url: null }
    ]);
  }
}
