import { Component, input } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  template: `
    <div
      class="relative rounded-3xl transition-all duration-500 overflow-hidden"
      [class.p-6]="padding() === 'sm'"
      [class.p-8]="padding() === 'md'"
      [class.p-10]="padding() === 'lg'"
      [class.glass]="variant() === 'subtle'"
      [class.glass-strong]="variant() === 'strong'"
      [class.bg-dark-card/90]="variant() === 'card'"
      [class.border]="true"
      [class.border-emerald/20]="accent() === 'emerald'"
      [class.border-gray-700/50]="accent() === 'neutral'"
      [class.hover:border-emerald/40]="hoverable()"
      [class.hover:shadow-xl]="hoverable()"
      [class.hover:shadow-emerald/5]="hoverable()"
    >
      @if (glow()) {
        <div class="absolute -inset-1 bg-gradient-to-r from-forest via-emerald to-emerald-light rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
      }
      <ng-content />
    </div>
  `,
})
export class GlassCardComponent {
  variant = input<'subtle' | 'strong' | 'card'>('subtle');
  accent = input<'emerald' | 'neutral'>('emerald');
  padding = input<'sm' | 'md' | 'lg'>('md');
  hoverable = input<boolean>(true);
  glow = input<boolean>(false);
}
