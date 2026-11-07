import { Component, inject, signal } from '@angular/core';
import { OasisNetworkService } from '../../../core/services/oasis-network.service';
import { TranslationService } from '../../../core/services/translation.service';
import { CtaButtonComponent } from '../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CtaButtonComponent],
  template: `
    <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Background gradient ambient lights -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/4 -left-32 w-96 h-96 bg-forest/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald/10 rounded-full blur-3xl"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left: Text Content -->
          <div class="space-y-8 z-10">
            <!-- Development Phase Badge -->
            <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 shadow-sm backdrop-blur-md">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span class="text-xs font-bold text-amber-300 tracking-wider uppercase">
                {{ i18n.t().hero.badge }}
              </span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              <span class="text-white">{{ i18n.t().hero.titleMain }}</span>
              <br />
              <span class="bg-gradient-to-r from-forest via-emerald to-emerald-light bg-clip-text text-transparent">
                {{ i18n.t().hero.titleGradient }}
              </span>
              <br />
              <span class="text-white">{{ i18n.t().hero.titleSuffix }}</span>
            </h1>

            <p class="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              {{ i18n.t().hero.subtitle }}
            </p>

            <!-- Transparency Disclaimer Banner -->
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-emerald/20 text-xs text-gray-300 leading-relaxed flex items-start gap-3">
              <svg class="w-5 h-5 text-emerald shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ i18n.t().hero.disclaimer }}</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <app-cta-button
                [label]="i18n.t().hero.ctaPrimary"
                variant="primary"
                href="#paradigm"
              />
              <app-cta-button
                [label]="i18n.t().hero.ctaSecondary"
                variant="secondary"
                href="#regional"
                [showIcon]="false"
              />
            </div>

            <!-- Stats (Zero baseline with clear Target / Roadmap Goals) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <!-- Stat 1: Polos -->
              <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden">
                <div class="flex items-baseline gap-2">
                  <p class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {{ oasisService.currentActivePoles() }}
                  </p>
                  <span class="text-xs font-bold text-emerald uppercase tracking-wider">
                    {{ i18n.t().hero.stats.polesMeta }}
                  </span>
                </div>
                <p class="text-[11px] font-medium text-gray-400 mt-1">
                  {{ i18n.t().hero.stats.polesDesc }}
                </p>
              </div>

              <!-- Stat 2: Espécies -->
              <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden">
                <div class="flex items-baseline gap-2">
                  <p class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {{ oasisService.currentCatalogedSpecies() }}
                  </p>
                  <span class="text-xs font-bold text-emerald uppercase tracking-wider">
                    {{ i18n.t().hero.stats.speciesMeta }}
                  </span>
                </div>
                <p class="text-[11px] font-medium text-gray-400 mt-1">
                  {{ i18n.t().hero.stats.speciesDesc }}
                </p>
              </div>

              <!-- Stat 3: Viveiros -->
              <div class="p-4 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden">
                <div class="flex items-baseline gap-2">
                  <p class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {{ oasisService.currentNurseries() }}
                  </p>
                  <span class="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {{ i18n.t().hero.stats.nurseriesMeta }}
                  </span>
                </div>
                <p class="text-[11px] font-medium text-gray-400 mt-1">
                  {{ i18n.t().hero.stats.nurseriesDesc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Brazil Map SVG with expansion targets -->
          <div class="relative flex flex-col items-center justify-center">
            <div class="relative w-full max-w-lg">
              <!-- Ambient map glow -->
              <div class="absolute inset-0 bg-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Map Header Badge -->
              <div class="mb-3 text-center">
                <span class="text-[11px] font-mono text-gray-400 uppercase tracking-widest bg-white/[0.04] px-3 py-1 rounded-full border border-white/5">
                  {{ i18n.t().hero.mapLegend }}
                </span>
              </div>

              <svg
                viewBox="0 0 500 520"
                class="w-full h-auto drop-shadow-2xl relative z-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#228B22" stop-opacity="0.8"/>
                    <stop offset="100%" stop-color="#50C878" stop-opacity="0.8"/>
                  </linearGradient>
                  <radialGradient id="mapFill" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#50C878" stop-opacity="0.12"/>
                    <stop offset="100%" stop-color="#228B22" stop-opacity="0.02"/>
                  </radialGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <!-- Stylized Brazil Geodesic Outline -->
                <path
                  d="M220,30 C240,25 280,30 310,50 C340,70 370,80 390,110 C410,140 430,170 440,200 C450,230 445,260 440,290 C435,320 420,350 400,370 C380,390 360,410 340,420 C320,430 290,440 270,445 C250,450 230,440 210,430 C190,420 170,400 155,380 C140,360 130,340 120,310 C110,280 100,250 95,220 C90,190 95,160 105,130 C115,100 130,70 155,50 C180,30 200,35 220,30 Z"
                  fill="url(#mapFill)"
                  stroke="url(#mapGradient)"
                  stroke-width="1.8"
                />

                <!-- Inter-pole projected mesh lines (dashed to indicate future connection) -->
                <line x1="200" y1="100" x2="380" y2="160" stroke="#50C878" stroke-width="0.8" opacity="0.3" stroke-dasharray="4,4"/>
                <line x1="380" y1="160" x2="290" y2="250" stroke="#50C878" stroke-width="0.8" opacity="0.3" stroke-dasharray="4,4"/>
                <line x1="290" y1="250" x2="330" y2="340" stroke="#50C878" stroke-width="0.8" opacity="0.3" stroke-dasharray="4,4"/>
                <line x1="330" y1="340" x2="290" y2="400" stroke="#50C878" stroke-width="0.8" opacity="0.3" stroke-dasharray="4,4"/>
                <line x1="200" y1="100" x2="290" y2="250" stroke="#50C878" stroke-width="0.8" opacity="0.3" stroke-dasharray="4,4"/>

                <!-- 1. Polo Norte (Meta de Expansão) -->
                <g class="cursor-pointer" (mouseenter)="selectedPoleId.set('pole-norte')" (click)="selectedPoleId.set('pole-norte')">
                  <circle cx="200" cy="100" r="14" fill="#50C878" opacity="0.1" stroke="#50C878" stroke-dasharray="2,2" class="animate-pulse-marker" style="animation-delay: 0s"/>
                  <circle cx="200" cy="100" r="6" fill="#1a2e1a" stroke="#7DDFAA" stroke-width="1.5"/>
                  <circle cx="200" cy="100" r="2.5" fill="#7DDFAA"/>
                  <text x="200" y="80" text-anchor="middle" fill="#7DDFAA" font-size="10" font-weight="600" font-family="Inter, sans-serif">
                    {{ i18n.t().hero.mapPoles.norte }}
                  </text>
                </g>

                <!-- 2. Polo Nordeste (Meta de Expansão) -->
                <g class="cursor-pointer" (mouseenter)="selectedPoleId.set('pole-nordeste')" (click)="selectedPoleId.set('pole-nordeste')">
                  <circle cx="380" cy="160" r="14" fill="#50C878" opacity="0.1" stroke="#50C878" stroke-dasharray="2,2" class="animate-pulse-marker" style="animation-delay: 0.4s"/>
                  <circle cx="380" cy="160" r="6" fill="#1a2e1a" stroke="#7DDFAA" stroke-width="1.5"/>
                  <circle cx="380" cy="160" r="2.5" fill="#7DDFAA"/>
                  <text x="380" y="140" text-anchor="middle" fill="#7DDFAA" font-size="10" font-weight="600" font-family="Inter, sans-serif">
                    {{ i18n.t().hero.mapPoles.nordeste }}
                  </text>
                </g>

                <!-- 3. Polo Centro-Oeste (Meta de Expansão) -->
                <g class="cursor-pointer" (mouseenter)="selectedPoleId.set('pole-centro-oeste')" (click)="selectedPoleId.set('pole-centro-oeste')">
                  <circle cx="290" cy="250" r="14" fill="#50C878" opacity="0.1" stroke="#50C878" stroke-dasharray="2,2" class="animate-pulse-marker" style="animation-delay: 0.8s"/>
                  <circle cx="290" cy="250" r="6" fill="#1a2e1a" stroke="#7DDFAA" stroke-width="1.5"/>
                  <circle cx="290" cy="250" r="2.5" fill="#7DDFAA"/>
                  <text x="290" y="230" text-anchor="middle" fill="#7DDFAA" font-size="10" font-weight="600" font-family="Inter, sans-serif">
                    {{ i18n.t().hero.mapPoles.centroOeste }}
                  </text>
                </g>

                <!-- 4. Polo Sudeste (Polo Piloto Inicial em Modelagem) -->
                <g class="cursor-pointer" (mouseenter)="selectedPoleId.set('pole-sudeste')" (click)="selectedPoleId.set('pole-sudeste')">
                  <circle cx="330" cy="340" r="16" fill="#f59e0b" opacity="0.2" class="animate-pulse-marker" style="animation-delay: 1.2s"/>
                  <circle cx="330" cy="340" r="7" fill="#228B22" stroke="#f59e0b" stroke-width="2" filter="url(#glow)"/>
                  <circle cx="330" cy="340" r="3" fill="#ffffff"/>
                  <text x="330" y="320" text-anchor="middle" fill="#fcd34d" font-size="10" font-weight="700" font-family="Inter, sans-serif">
                    ★ {{ i18n.t().hero.mapPoles.sudeste }}
                  </text>
                </g>

                <!-- 5. Polo Sul (Meta de Expansão) -->
                <g class="cursor-pointer" (mouseenter)="selectedPoleId.set('pole-sul')" (click)="selectedPoleId.set('pole-sul')">
                  <circle cx="290" cy="400" r="14" fill="#50C878" opacity="0.1" stroke="#50C878" stroke-dasharray="2,2" class="animate-pulse-marker" style="animation-delay: 1.6s"/>
                  <circle cx="290" cy="400" r="6" fill="#1a2e1a" stroke="#7DDFAA" stroke-width="1.5"/>
                  <circle cx="290" cy="400" r="2.5" fill="#7DDFAA"/>
                  <text x="290" y="425" text-anchor="middle" fill="#7DDFAA" font-size="10" font-weight="600" font-family="Inter, sans-serif">
                    {{ i18n.t().hero.mapPoles.sul }}
                  </text>
                </g>
              </svg>

              <!-- Interactive Floating Glass Card for Selected Target Pole -->
              @if (currentPole(); as pole) {
                <div class="mt-4 p-4 rounded-2xl glass-strong border border-emerald/30 shadow-xl transition-all duration-300">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold text-emerald uppercase tracking-wider flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full" [class]="pole.status === 'polo_piloto' ? 'bg-amber-400' : 'bg-emerald'"></span>
                      {{ pole.name }}
                    </span>
                    <span
                      class="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase border"
                      [class]="pole.status === 'polo_piloto'
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        : 'bg-emerald/10 text-emerald-light border-emerald/20'"
                    >
                      {{ pole.status === 'polo_piloto' ? i18n.t().hero.poleStatusPilot : i18n.t().hero.poleStatusTarget }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-300 mb-2 font-medium">{{ pole.targetRegion }}</p>
                  <div class="grid grid-cols-2 gap-2 text-[11px] text-gray-400 pt-2 border-t border-white/5">
                    <div>
                      <span>🌱 {{ i18n.t().hero.speciesLabel }}:</span>
                      <strong class="text-white ml-1">Meta {{ pole.targetSpeciesCount }}</strong>
                    </div>
                    <div>
                      <span>🏡 {{ i18n.t().hero.nurseriesLabel }}:</span>
                      <strong class="text-white ml-1">Meta {{ pole.targetNurseryPartners }}</strong>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom gradient fade into next section -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none"></div>
    </section>
  `,
})
export class HeroComponent {
  protected readonly oasisService = inject(OasisNetworkService);
  protected readonly i18n = inject(TranslationService);
  readonly selectedPoleId = signal<string>('pole-sudeste');

  currentPole() {
    return (
      this.oasisService.poles().find((p) => p.id === this.selectedPoleId()) ??
      this.oasisService.poles()[0]
    );
  }
}
