import { Component, inject, signal, computed } from '@angular/core';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';
import { GlassCardComponent } from '../../../shared/components/glass-card/glass-card.component';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-regional-oasis',
  standalone: true,
  imports: [SectionHeadingComponent, GlassCardComponent],
  template: `
    <section id="regional" class="py-24 lg:py-32 relative">
      <!-- Ambient light effect -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-forest/10 rounded-full blur-[140px]"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Heading via Shared Component -->
        <app-section-heading
          [tag]="i18n.t().regional.tag"
          [title]="i18n.t().regional.title"
          [highlight]="i18n.t().regional.highlight"
          [subtitle]="i18n.t().regional.subtitle"
        />

        <!-- Tab Selection Navigation -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
          @for (pillar of currentPillars(); track pillar.id; let i = $index) {
            <button
              type="button"
              (click)="activeTab.set(i)"
              class="group px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer"
              [class]="activeTab() === i
                ? 'bg-gradient-to-r from-forest to-emerald-dark text-white shadow-lg shadow-forest/30 border border-emerald/40'
                : 'glass text-gray-400 hover:text-white hover:border-emerald/40 hover:bg-emerald/5'"
            >
              <span
                class="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold transition-colors"
                [class]="activeTab() === i ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400 group-hover:text-emerald'"
              >
                0{{ i + 1 }}
              </span>
              <span>{{ pillar.title }}</span>
            </button>
          }
        </div>

        <!-- Pillar Interactive Panel -->
        @for (pillar of currentPillars(); track pillar.id; let i = $index) {
          @if (activeTab() === i) {
            <div class="grid lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
              <!-- Left: Detailed Content Card (7 Cols) -->
              <div class="lg:col-span-7">
                <app-glass-card
                  variant="strong"
                  accent="emerald"
                  padding="lg"
                  class="h-full block bg-dark-card/90"
                >
                  <div class="flex items-center justify-between mb-6">
                    <span class="px-3.5 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-xs font-bold text-emerald uppercase tracking-wider">
                      {{ pillar.badge }}
                    </span>
                    <span class="text-xs font-mono text-gray-400">
                      PROTOCOL RO-P{{ i + 1 }}
                    </span>
                  </div>

                  <h3 class="text-2xl md:text-3xl font-extrabold text-white mb-4">
                    {{ pillar.title }}
                  </h3>

                  <p class="text-base text-gray-300 leading-relaxed mb-6">
                    {{ pillar.fullDesc }}
                  </p>

                  <!-- Technical Specs Grid -->
                  <div class="grid sm:grid-cols-2 gap-4 mb-8">
                    @for (spec of pillar.specs; track spec.label) {
                      <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald/20 transition-colors">
                        <p class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{{ spec.label }}</p>
                        <p class="text-sm font-bold text-white mt-1">{{ spec.value }}</p>
                      </div>
                    }
                  </div>

                  <!-- SLA Badge -->
                  <div class="flex items-center gap-3 p-4 rounded-xl bg-forest/15 border border-forest/30 text-emerald-light">
                    <svg class="w-5 h-5 shrink-0 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-xs md:text-sm font-medium">
                      {{ pillar.sla }}
                    </span>
                  </div>
                </app-glass-card>
              </div>

              <!-- Right: Focus on "Engenheiros Biológicos de Base" (5 Cols) -->
              <div class="lg:col-span-5">
                <app-glass-card
                  variant="card"
                  accent="emerald"
                  padding="lg"
                  [glow]="true"
                  class="h-full block bg-gradient-to-b from-[#132813] to-dark-card border-emerald/30 shadow-xl"
                >
                  <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center text-white mb-6 shadow-lg shadow-forest/30">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>

                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-xs font-semibold text-emerald uppercase tracking-wider mb-3">
                    {{ i18n.t().regional.humanRole.tag }}
                  </div>

                  <h4 class="text-xl font-extrabold text-white mb-3">
                    {{ i18n.t().regional.humanRole.title }}
                  </h4>

                  <p class="text-sm text-gray-300 leading-relaxed mb-6">
                    {{ i18n.t().regional.humanRole.desc }}
                  </p>

                  <div class="p-4 rounded-2xl bg-black/30 border border-emerald/20 mb-6">
                    <p class="text-xs font-bold text-emerald uppercase tracking-wider mb-2">Protocolo Operacional</p>
                    <p class="text-xs text-gray-300 leading-relaxed">
                      {{ pillar.role }}
                    </p>
                  </div>

                  <div class="space-y-3">
                    <div class="flex items-center gap-2.5 text-xs text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-emerald"></div>
                      <span>{{ i18n.t().regional.humanRole.bullet1 }}</span>
                    </div>
                    <div class="flex items-center gap-2.5 text-xs text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-emerald"></div>
                      <span>{{ i18n.t().regional.humanRole.bullet2 }}</span>
                    </div>
                    <div class="flex items-center gap-2.5 text-xs text-gray-300">
                      <div class="w-2 h-2 rounded-full bg-emerald"></div>
                      <span>{{ i18n.t().regional.humanRole.bullet3 }}</span>
                    </div>
                  </div>
                </app-glass-card>
              </div>
            </div>
          }
        }
      </div>
    </section>
  `,
})
export class RegionalOasisComponent {
  protected readonly i18n = inject(TranslationService);
  readonly activeTab = signal(0);

  readonly currentPillars = computed(() => {
    const p = this.i18n.t().regional.pillars;
    return [
      { id: 'banco', ...p.banco },
      { id: 'recuperacao', ...p.recuperacao },
      { id: 'estoque', ...p.estoque },
    ];
  });
}
