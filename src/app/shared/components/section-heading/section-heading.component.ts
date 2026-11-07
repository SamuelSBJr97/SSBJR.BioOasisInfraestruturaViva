import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald/10 text-emerald border border-emerald/20 mb-4 shadow-sm shadow-emerald/5">
        {{ tag() }}
      </span>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
        {{ title() }}
        @if (highlight()) {
          <span class="bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent">
            {{ highlight() }}
          </span>
        }
        @if (titleSuffix()) {
          <span>{{ titleSuffix() }}</span>
        }
      </h2>
      @if (subtitle()) {
        <p class="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  tag = input.required<string>();
  title = input.required<string>();
  highlight = input<string>('');
  titleSuffix = input<string>('');
  subtitle = input<string>('');
}
