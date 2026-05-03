import { Injectable, signal } from '@angular/core';

export interface BreadcrumbItem {
  label: string;
  url: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private readonly breadcrumbsSignal = signal<BreadcrumbItem[]>([
    { label: 'Home', url: null }
  ]);

  readonly breadcrumbs = this.breadcrumbsSignal.asReadonly();

  setBreadcrumbs(items: BreadcrumbItem[]): void {
    this.breadcrumbsSignal.set(items);
  }
}