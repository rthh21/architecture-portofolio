import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  isScrollingDown = false;
  @HostListener ('window:scroll', []) onWindowScroll() {
    const currentScroll = window.scrollY;
    this.isScrollingDown = currentScroll > 900;
  }
}
