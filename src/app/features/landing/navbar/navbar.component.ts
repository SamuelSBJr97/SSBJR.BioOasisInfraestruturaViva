import { Component, inject, signal, HostListener } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';
import { SupportedLanguage } from '../../../core/i18n/translations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.glass-strong]="scrolled()"
      [class.bg-transparent]="!scrolled()"
    >
      <!-- Top Language Banner Bar -->
      <div class="border-b border-white/5 bg-black/40 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between text-xs">
          <div class="hidden sm:flex items-center gap-2 text-gray-400">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald"></span>
            <span class="text-[11px] font-mono tracking-wider">BIO-INFRASTRUCTURE // PROTOCOL v2.4</span>
          </div>

          <!-- Language Selector at the Top (pt-br, en-us, es-es) -->
          <div class="flex items-center gap-1.5 ml-auto">
            <span class="text-[10px] text-gray-400 uppercase tracking-widest mr-1 hidden xs:inline">Idioma:</span>
            <div class="inline-flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/10">
              @for (lang of i18n.availableLanguages; track lang.code) {
                <button
                  type="button"
                  (click)="changeLanguage(lang.code)"
                  [title]="lang.name"
                  class="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-all duration-200 cursor-pointer flex items-center gap-1"
                  [class]="i18n.currentLang() === lang.code
                    ? 'bg-gradient-to-r from-forest to-emerald-dark text-white shadow-sm shadow-emerald/30 border border-emerald/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'"
                >
                  <span class="text-xs">{{ lang.flag }}</span>
                  <span class="uppercase">{{ lang.label }}</span>
                </button>
              }
            </div>
          </div>
        </div>
      </div>

      <!-- Main Navigation Bar -->
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-18">
          <!-- Logo -->
          <a href="#hero" class="flex items-center gap-2.5 group">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center shadow-md shadow-forest/30">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <span class="text-lg font-bold text-white group-hover:text-emerald transition-colors tracking-tight">
              Rede <span class="text-emerald">Oásis</span>
            </span>
          </a>

          <!-- Desktop Navigation Anchor Links (Translated) -->
          <div class="hidden md:flex items-center gap-1">
            <a
              href="#hero"
              class="px-4 py-2 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all duration-200"
            >
              {{ i18n.t().navbar.navLinks.hero }}
            </a>
            <a
              href="#paradigm"
              class="px-4 py-2 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all duration-200"
            >
              {{ i18n.t().navbar.navLinks.paradigm }}
            </a>
            <a
              href="#regional"
              class="px-4 py-2 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all duration-200"
            >
              {{ i18n.t().navbar.navLinks.regional }}
            </a>
            <a
              href="#traceability"
              class="px-4 py-2 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all duration-200"
            >
              {{ i18n.t().navbar.navLinks.traceability }}
            </a>
            <a
              href="#footer"
              class="px-4 py-2 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all duration-200"
            >
              {{ i18n.t().navbar.navLinks.contact }}
            </a>
          </div>

          <!-- CTA + Mobile Hamburger -->
          <div class="flex items-center gap-3">
            <a
              href="#footer"
              class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-gradient-to-r from-forest to-emerald-dark text-white hover:from-forest-dark hover:to-forest transition-all duration-300 shadow-lg shadow-forest/30"
            >
              {{ i18n.t().navbar.cta }}
            </a>
            <button
              type="button"
              (click)="mobileMenuOpen.set(!mobileMenuOpen())"
              aria-label="Abrir menu"
              class="md:hidden p-2 text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-colors cursor-pointer"
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

        <!-- Mobile Drawer Menu -->
        @if (mobileMenuOpen()) {
          <div class="md:hidden glass rounded-2xl mt-2 p-5 mb-4 border border-emerald/20 shadow-2xl">
            <!-- Mobile Language Switcher -->
            <div class="mb-4 pb-4 border-b border-white/10">
              <p class="text-[10px] text-gray-400 uppercase tracking-widest mb-2 font-mono">Selecionar Idioma / Language:</p>
              <div class="grid grid-cols-3 gap-1.5">
                @for (lang of i18n.availableLanguages; track lang.code) {
                  <button
                    type="button"
                    (click)="changeLanguage(lang.code)"
                    class="py-2 px-2 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center gap-1.5"
                    [class]="i18n.currentLang() === lang.code
                      ? 'bg-gradient-to-r from-forest to-emerald-dark text-white border border-emerald/40'
                      : 'bg-white/5 text-gray-400 hover:text-white'"
                  >
                    <span>{{ lang.flag }}</span>
                    <span class="uppercase">{{ lang.label }}</span>
                  </button>
                }
              </div>
            </div>

            <!-- Mobile Navigation Links -->
            <div class="space-y-1">
              <a
                href="#hero"
                (click)="mobileMenuOpen.set(false)"
                class="block px-4 py-2.5 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all"
              >
                {{ i18n.t().navbar.navLinks.hero }}
              </a>
              <a
                href="#paradigm"
                (click)="mobileMenuOpen.set(false)"
                class="block px-4 py-2.5 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all"
              >
                {{ i18n.t().navbar.navLinks.paradigm }}
              </a>
              <a
                href="#regional"
                (click)="mobileMenuOpen.set(false)"
                class="block px-4 py-2.5 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all"
              >
                {{ i18n.t().navbar.navLinks.regional }}
              </a>
              <a
                href="#traceability"
                (click)="mobileMenuOpen.set(false)"
                class="block px-4 py-2.5 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all"
              >
                {{ i18n.t().navbar.navLinks.traceability }}
              </a>
              <a
                href="#footer"
                (click)="mobileMenuOpen.set(false)"
                class="block px-4 py-2.5 text-sm text-gray-300 hover:text-emerald rounded-lg hover:bg-emerald/5 transition-all"
              >
                {{ i18n.t().navbar.navLinks.contact }}
              </a>
            </div>

            <a
              href="#footer"
              (click)="mobileMenuOpen.set(false)"
              class="block mt-4 px-5 py-3 text-xs font-bold uppercase tracking-wider text-center rounded-xl bg-gradient-to-r from-forest to-emerald-dark text-white shadow-lg shadow-forest/30"
            >
              {{ i18n.t().navbar.cta }}
            </a>
          </div>
        }
      </nav>
    </header>
  `,
})
export class NavbarComponent {
  protected readonly i18n = inject(TranslationService);
  readonly mobileMenuOpen = signal(false);
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  changeLanguage(lang: SupportedLanguage): void {
    this.i18n.setLanguage(lang);
  }
}
