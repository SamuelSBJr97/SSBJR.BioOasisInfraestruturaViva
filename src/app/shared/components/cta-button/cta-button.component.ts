import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  template: `
    @if (href()) {
      <a
        [href]="href()"
        [class]="buttonClasses()"
        class="group relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 cursor-pointer"
      >
        <span class="relative z-10">{{ label() }}</span>
        @if (showIcon()) {
          <svg class="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        }
      </a>
    } @else {
      <button
        [type]="type()"
        (click)="btnClick.emit($event)"
        [class]="buttonClasses()"
        class="group relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 cursor-pointer"
      >
        <span class="relative z-10">{{ label() }}</span>
        @if (showIcon()) {
          <svg class="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        }
      </button>
    }
  `,
})
export class CtaButtonComponent {
  label = input.required<string>();
  variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  href = input<string | null>(null);
  type = input<'button' | 'submit' | 'reset'>('button');
  showIcon = input<boolean>(true);
  btnClick = output<MouseEvent>();

  buttonClasses() {
    const base = 'rounded-xl text-sm';
    switch (this.variant()) {
      case 'primary':
        return `${base} px-8 py-3.5 bg-gradient-to-r from-forest to-emerald-dark text-white hover:from-forest-dark hover:to-forest shadow-lg shadow-forest/25 hover:shadow-emerald/30`;
      case 'secondary':
        return `${base} px-8 py-3.5 glass border border-emerald/30 text-emerald hover:bg-emerald/10 hover:border-emerald/50`;
      case 'ghost':
        return `${base} px-4 py-2 text-emerald hover:text-emerald-light`;
    }
  }
}
