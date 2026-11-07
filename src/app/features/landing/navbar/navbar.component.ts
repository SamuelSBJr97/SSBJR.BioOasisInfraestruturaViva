import { Component, inject, signal, HostListener } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.glass-strong]="scrolled()"
      [class.bg-transparent]="!scrolled()"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <a href="#hero" class="flex items-center gap-2 group">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <span class="text-lg font-bold text-white group-hover:text-emerald transition-colors">
              Rede <span class="text-emerald">Oásis</span>
            </span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-1">
            @for (link of themeService.navLinks(); track link.fragment) {
              <a
                [href]="'#' + link.fragment"
                class="px-4 py-2 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all duration-200"
              >
                {{ link.label }}
              </a>
            }
          </div>

          <!-- CTA + Mobile Toggle -->
          <div class="flex items-center gap-3">
            <a
              href="#footer"
              class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-forest to-emerald-dark text-white hover:from-forest-dark hover:to-forest transition-all duration-300 shadow-lg shadow-forest/25"
            >
              Entrar na Rede
            </a>
            <button
              (click)="mobileMenuOpen.set(!mobileMenuOpen())"
              class="md:hidden p-2 text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-colors"
            >
              @if (mobileMenuOpen()) {
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              } @else {
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              }
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        @if (mobileMenuOpen()) {
          <div class="md:hidden glass rounded-2xl mt-2 p-4 mb-4 border border-emerald/10">
            @for (link of themeService.navLinks(); track link.fragment) {
              <a
                [href]="'#' + link.fragment"
                (click)="mobileMenuOpen.set(false)"
                class="block px-4 py-3 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all"
              >
                {{ link.label }}
              </a>
            }
            <a
              href="#footer"
              (click)="mobileMenuOpen.set(false)"
              class="block mt-3 px-5 py-2.5 text-sm font-semibold text-center rounded-xl bg-gradient-to-r from-forest to-emerald-dark text-white"
            >
              Entrar na Rede
            </a>
          </div>
        }
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  protected readonly themeService = inject(ThemeService);
  readonly mobileMenuOpen = signal(false);
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }
}
