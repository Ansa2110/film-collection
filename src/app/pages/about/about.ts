import { Component, inject } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly breadcrumbService = inject(BreadcrumbService);

  constructor() {
    this.breadcrumbService.setBreadcrumbs([
      { label: 'About', url: null }
    ]);
  }
  
}
