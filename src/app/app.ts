import {AfterViewInit, Component, signal} from '@angular/core';
import {LayoutComponent} from './components/layout-component/layout-component';
import {NgxAuroraComponent} from '@omnedia/ngx-aurora';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent,
    NgxAuroraComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('portfolio');

  /**
   * Méthode de tracking et de création du halo lumineux autour du curseur
   */
  ngAfterViewInit(): void {
    const light = document.getElementById('cursor-light');
    if (!light) return;
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      light.style.background = `
      radial-gradient(500px at ${x}px ${y}px, rgba(29, 78, 216, 0.1), transparent 80%)
    `;
    });
  }

}
