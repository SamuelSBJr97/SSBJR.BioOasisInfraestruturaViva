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
            <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/20 shadow-sm shadow-emerald/5 backdrop-blur-md">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse"></span>
              <span class="text-xs font-semibold text-emerald tracking-wider uppercase">
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

            <!-- Stats with real Signals values -->
            <div class="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div class="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <p class="text-3xl md:text-4xl font-extrabold text-emerald tracking-tight">
                  {{ oasisService.totalPoles() }}
                </p>
                <p class="text-xs font-medium text-gray-400 mt-1 uppercase tracking-wide">
                  {{ i18n.t().hero.stats.poles }}
                </p>
              </div>
              <div class="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <p class="text-3xl md:text-4xl font-extrabold text-emerald tracking-tight">
                  {{ oasisService.totalCatalogedSpecies() }}+
                </p>
                <p class="text-xs font-medium text-gray-400 mt-1 uppercase tracking-wide">
                  {{ i18n.t().hero.stats.species }}
                </p>
              </div>
              <div class="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <p class="text-3xl md:text-4xl font-extrabold text-emerald tracking-tight">
                  {{ oasisService.totalNurseries() }}
                </p>
                <p class="text-xs font-medium text-gray-400 mt-1 uppercase tracking-wide">
                  {{ i18n.t().hero.stats.nurseries }}
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Brazil Map SVG with interactive animated markers -->
          <div class="relative flex flex-col items-center justify-center">
            <div class="relative w-full max-w-lg">
              <!-- Ambient map glow -->
              <div class="absolute inset-0 bg-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

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

                <!-- Internal Biome contour meshes -->
                <path
                  d="M140,160 Q210,130 270,170 T350,210"
                  fill="none"
                  stroke="#50C878"
                  stroke-width="0.75"
                  stroke-dasharray="3,3"
                  opacity="0.3"
                />
                <path
                  d="M170,260 Q240,240 310,290 T350,360"
                  fill="none"
                  stroke="#50C878"
                  stroke-width="0.75"
                  stroke-dasharray="3,3"
                  opacity="0.3"
                />

                <!-- Inter-pole telemetry mesh lines -->
                <line x1="200" y1="100" x2="380" y2="160" stroke="#50C878" stroke-width="0.8" opacity="0.35" stroke-dasharray="4,4"/>
                <line x1="380" y1="160" x2="290" y2="250" stroke="#50C878" stroke-width="0.8" opacity="0.35" stroke-dasharray="4,4"/>
                <line x1="290" y1="250" x2="330" y2="340" stroke="#50C878" stroke-width="0.8" opacity="0.35" stroke-dasharray="4,4"/>
                <line x1="330" y1="340" x2="290" y2="400" stroke="#50C878" stroke-width="0.8" opacity="0.35" stroke-dasharray="4,4"/>
                <line x1="200" y1="100" x2="290" y2="250" stroke="#50C878" stroke-width="0.8" opacity="0.35" stroke-dasharray="4,4"/>

                <!-- 1. Polo Norte (Manaus) -->
                <g class="cursor-pointer" (mouseenter)="selectedPoleId.set('pole-norte')" (click)="selectedPoleId.set('pole-norte')">
                  <circle cx="200" cy="100" r="14" fill="#50C878" opacity="0.15" class="animate-pulse-marker" style="animation-delay: 0s"/>
                  <circle cx="200" cy="100" r="7" fill="#228B22" stroke="#7DDFAA" stroke-width="2" filter="url(#glow)"/>
                  <circle cx="200" cy="100" r="3" fill="#ffffff"/>
                  <text x="200" y="80" text-anchor="middle" fill="#7DDFAA" font-size="11" font-weight="600" font-family="Inter, sans-serif">
                    {{ i18n.t().hero.mapPoles.norte }}
                  </text>
                </g>

                <!-- 2. Polo Nordeste (Recife) -->
                <g class="cursor-pointer" (mouseenter)="selectedPoleId.set('pole-nordeste')" (click)="selectedPoleId.set('pole-nordeste')">
                  <circle cx="380" cy="160" r="14" fill="#50C878" opacity="0.15" class="animate-pulse-marker" style="animation-delay: 0.4s"/>
                  <circle cx="380" cy="160" r="7" fill="#228B22" stroke="#7DDFAA" stroke-width="2" filter="url(#glow)"/>
                  <circle cx="380" cy="160" r="3" fill="#ffffff"/>
                  <text x="380" y="140" text-anchor="middle" fill="#7DDFAA" font-size="11" font-weight="600" font-family="Inter, sans-serif">
                    {{ i18n.t().hero.mapPoles.nordeste }}
                  </text>
                </g>

                <!-- 3. Polo Centro-Oeste (Brasília) -->
                <g class="cursor-pointer" (mouseenter)="selectedPoleId.set('pole-centro-oeste')" (click)="selectedPoleId.set('pole-centro-oeste')">
                  <circle cx="290" cy="250" r="14" fill="#50C878" opacity="0.15" class="animate-pulse-marker" style="animation-delay: 0.8s"/>
                  <circle cx="290" cy="250" r="7" fill="#228B22" stroke="#7DDFAA" stroke-width="2" filter="url(#glow)"/>
                  <circle cx="290" cy="250" r="3" fill="#ffffff"/>
                  <text x="290" y="230" text-anchor="middle" fill="#7DDFAA" font-size="11" font-weight="600" font-family="Inter, sans-serif">
                    {{ i18n.t().hero.mapPoles.centroOeste }}
                  </text>
                </g>

                <!-- 4. Polo Sudeste (São Paulo / Vale) -->
                <g class="cursor-pointer" (mouseenter)="selectedPoleId.set('pole-sudeste')" (click)="selectedPoleId.set('pole-sudeste')">
                  <circle cx="330" cy="340" r="14" fill="#50C878" opacity="0.15" class="animate-pulse-marker" style="animation-delay: 1.2s"/>
                  <circle cx="330" cy="340" r="7" fill="#228B22" stroke="#7DDFAA" stroke-width="2" filter="url(#glow)"/>
                  <circle cx="330" cy="340" r="3" fill="#ffffff"/>
                  <text x="330" y="320" text-anchor="middle" fill="#7DDFAA" font-size="11" font-weight="600" font-family="Inter, sans-serif">
                    {{ i18n.t().hero.mapPoles.sudeste }}
                  </text>
                </g>

                <!-- 5. Polo Sul (Curitiba) -->
                <g class="cursor-pointer" (mouseenter)="selectedPoleId.set('pole-sul')" (click)="selectedPoleId.set('pole-sul')">
                  <circle cx="290" cy="400" r="14" fill="#50C878" opacity="0.15" class="animate-pulse-marker" style="animation-delay: 1.6s"/>
                  <circle cx="290" cy="400" r="7" fill="#228B22" stroke="#7DDFAA" stroke-width="2" filter="url(#glow)"/>
                  <circle cx="290" cy="400" r="3" fill="#ffffff"/>
                  <text x="290" y="425" text-anchor="middle" fill="#7DDFAA" font-size="11" font-weight="600" font-family="Inter, sans-serif">
                    {{ i18n.t().hero.mapPoles.sul }}
                  </text>
                </g>
              </svg>

              <!-- Interactive Floating Glass Card for Selected Pole -->
              @if (currentPole(); as pole) {
                <div class="mt-4 p-4 rounded-2xl glass-strong border border-emerald/30 shadow-xl transition-all duration-300">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold text-emerald uppercase tracking-wider flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-emerald"></span>
                      {{ pole.name }}
                    </span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald/10 text-emerald-light border border-emerald/20 font-semibold uppercase">
                      {{ i18n.t().hero.poleStatus }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-300 mb-2 font-medium">{{ pole.location }}</p>
                  <div class="flex items-center gap-4 text-[11px] text-gray-400">
                    <span>🌱 <strong class="text-white">{{ pole.speciesCount }}</strong> {{ i18n.t().hero.speciesLabel }}</span>
                    <span>🏡 <strong class="text-white">{{ pole.nurseryPartners }}</strong> {{ i18n.t().hero.nurseriesLabel }}</span>
                    <span>📍 {{ pole.primaryBiomes.join(', ') }}</span>
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
