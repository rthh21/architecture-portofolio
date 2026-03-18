import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('arh-portofolio');
  
  // arrow state: down at top, up after 100vh
  isScrollingDown = false;

  @HostListener('window:scroll', []) onWindowScroll() {
    const currentScroll = window.scrollY;
    this.isScrollingDown = currentScroll > 0;
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
} 
