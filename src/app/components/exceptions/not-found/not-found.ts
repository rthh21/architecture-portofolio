import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  template: ` 
    <section class="not-found">
      <h1>404</h1>
      <p>Oops! This page has moved to a different neighborhood.</p>
    </section>
  `,
  styleUrl: './not-found.scss',
})
export class NotFound {}
