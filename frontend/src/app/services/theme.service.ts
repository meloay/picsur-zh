import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  get isDark(): boolean {
    return this.document.documentElement.classList.contains('theme-dark');
  }

  toggle(): void {
    const dark = !this.isDark;
    this.document.documentElement.classList.toggle('theme-dark', dark);
    this.document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', dark ? '#152328' : '#f5f8f7');
    try {
      this.document.defaultView?.localStorage.setItem(
        'picsur-theme',
        dark ? 'dark' : 'light',
      );
    } catch {
      // Browsing with storage disabled still supports switching this session.
    }
  }
}
