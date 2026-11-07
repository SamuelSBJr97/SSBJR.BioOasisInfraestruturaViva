import { Component, inject } from '@angular/core';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';
import { GlassCardComponent } from '../../../shared/components/glass-card/glass-card.component';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-paradigm-shift',
  standalone: true,
  imports: [SectionHeadingComponent, GlassCardComponent],
  template: `
    <section id="paradigm" class="py-24 lg:py-32 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Heading via Shared Component -->
        <app-section-heading
          [tag]="i18n.t().paradigm.tag"
          [title]="i18n.t().paradigm.title"
          [highlight]="i18n.t().paradigm.highlight"
          [subtitle]="i18n.t().paradigm.subtitle"
        />

        <!-- Cards Grid -->
        <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <!-- Card 1: Tradicional (Opaco / Frio / Cinzento) -->
          <div class="relative group h-full">
            <app-glass-card
              variant="card"
              accent="neutral"
              padding="lg"
              [hoverable]="false"
              class="h-full block opacity-75 grayscale-[30%] border-gray-800 bg-gray-950/80"
            >
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/80 border border-gray-700/60 mb-6">
                <span class="w-2 h-2 rounded-full bg-gray-500"></span>
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {{ i18n.t().paradigm.traditional.badge }}
                </span>
              </div>

              <h3 class="text-2xl font-bold text-gray-300 mb-3">
                {{ i18n.t().paradigm.traditional.title }}
              </h3>
              <p class="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                {{ i18n.t().paradigm.traditional.desc }}
              </p>

              <ul class="space-y-5">
                <li class="flex items-start gap-3.5">
                  <div class="w-6 h-6 mt-0.5 rounded-lg bg-red-950/40 border border-red-800/30 flex items-center justify-center shrink-0">
                    <svg class="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-300 font-semibold text-sm">
                      {{ i18n.t().paradigm.traditional.item1Title }}
                    </p>
                    <p class="text-xs text-gray-400">
                      {{ i18n.t().paradigm.traditional.item1Desc }}
                    </p>
                  </div>
                </li>
                <li class="flex items-start gap-3.5">
                  <div class="w-6 h-6 mt-0.5 rounded-lg bg-red-950/40 border border-red-800/30 flex items-center justify-center shrink-0">
                    <svg class="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-300 font-semibold text-sm">
                      {{ i18n.t().paradigm.traditional.item2Title }}
                    </p>
                    <p class="text-xs text-gray-400">
                      {{ i18n.t().paradigm.traditional.item2Desc }}
                    </p>
                  </div>
                </li>
                <li class="flex items-start gap-3.5">
                  <div class="w-6 h-6 mt-0.5 rounded-lg bg-red-950/40 border border-red-800/30 flex items-center justify-center shrink-0">
                    <svg class="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-300 font-semibold text-sm">
                      {{ i18n.t().paradigm.traditional.item3Title }}
                    </p>
                    <p class="text-xs text-gray-400">
                      {{ i18n.t().paradigm.traditional.item3Desc }}
                    </p>
                  </div>
                </li>
              </ul>
            </app-glass-card>
          </div>

          <!-- Card 2: Rede Oásis (Destacado / Vibrante / Verde Tecnológico) -->
          <div class="relative group h-full">
            <!-- Glowing gradient background halo -->
            <div class="absolute -inset-1.5 bg-gradient-to-r from-forest via-emerald to-emerald-light rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition duration-700"></div>

            <app-glass-card
              variant="strong"
              accent="emerald"
              padding="lg"
              [glow]="true"
              class="h-full block relative bg-[#0b160b]/95 border-emerald/40 hover:border-emerald/70 shadow-2xl"
            >
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/15 border border-emerald/30 mb-6 shadow-sm shadow-emerald/20">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse"></span>
                <span class="text-xs font-bold text-emerald uppercase tracking-wider">
                  {{ i18n.t().paradigm.oasis.badge }}
                </span>
              </div>

              <h3 class="text-2xl lg:text-3xl font-extrabold text-white mb-3">
                {{ i18n.t().paradigm.oasis.title }}
                <span class="bg-gradient-to-r from-emerald via-emerald-light to-white bg-clip-text text-transparent">
                  {{ i18n.t().paradigm.oasis.highlight }}
                </span>
              </h3>
              <p class="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
                {{ i18n.t().paradigm.oasis.desc }}
              </p>

              <!-- Módulos Detalhados -->
              <div class="space-y-4">
                <!-- Módulo 1 -->
                <div class="p-4 rounded-2xl bg-white/[0.03] border border-emerald/20 hover:border-emerald/40 transition-colors">
                  <div class="flex items-start gap-3">
                    <div class="w-7 h-7 rounded-xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center shrink-0 shadow-md shadow-emerald/20">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-white font-bold text-sm md:text-base">
                        {{ i18n.t().paradigm.oasis.mod1Title }}
                      </h4>
                      <p class="text-xs text-gray-300 mt-1">
                        {{ i18n.t().paradigm.oasis.mod1Desc }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Módulo 2 -->
                <div class="p-4 rounded-2xl bg-white/[0.03] border border-emerald/20 hover:border-emerald/40 transition-colors">
                  <div class="flex items-start gap-3">
                    <div class="w-7 h-7 rounded-xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center shrink-0 shadow-md shadow-emerald/20">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-white font-bold text-sm md:text-base">
                        {{ i18n.t().paradigm.oasis.mod2Title }}
                      </h4>
                      <p class="text-xs text-gray-300 mt-1">
                        {{ i18n.t().paradigm.oasis.mod2Desc }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Módulo 3 -->
                <div class="p-4 rounded-2xl bg-white/[0.03] border border-emerald/20 hover:border-emerald/40 transition-colors">
                  <div class="flex items-start gap-3">
                    <div class="w-7 h-7 rounded-xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center shrink-0 shadow-md shadow-emerald/20">
                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-white font-bold text-sm md:text-base">
                        {{ i18n.t().paradigm.oasis.mod3Title }}
                      </h4>
                      <p class="text-xs text-gray-300 mt-1">
                        {{ i18n.t().paradigm.oasis.mod3Desc }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </app-glass-card>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ParadigmShiftComponent {
  protected readonly i18n = inject(TranslationService);
}
