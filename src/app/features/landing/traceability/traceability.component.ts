import { Component, inject } from '@angular/core';
import { SectionHeadingComponent } from '../../../shared/components/section-heading/section-heading.component';
import { OasisNetworkService } from '../../../core/services/oasis-network.service';

@Component({
  selector: 'app-traceability',
  standalone: true,
  imports: [SectionHeadingComponent],
  template: `
    <section id="traceability" class="py-24 lg:py-32 relative bg-[#080d08] overflow-hidden">
      <!-- Glow ambient lines -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/20 to-transparent"></div>
      <div class="absolute top-1/3 -right-40 w-96 h-96 bg-emerald/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Section Heading via Shared Component -->
        <app-section-heading
          tag="Rastreabilidade & Governança"
          title="Cada Planta,"
          highlight="Um Ativo Rastreável"
          subtitle="Garantia de procedência com telemetria biométrica, certificação de origem e governança corporativa no modelo SaaS."
        />

        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left: Mockup Visual de Leitura QR Code / RFID (5 Cols) -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="relative w-full max-w-sm">
              <!-- Glow backer -->
              <div class="absolute -inset-4 bg-emerald/10 rounded-[3rem] blur-2xl"></div>

              <!-- Smartphone Frame Mockup -->
              <div class="relative rounded-[2.5rem] p-3.5 bg-gradient-to-b from-gray-700 via-gray-900 to-black border-2 border-emerald/30 shadow-2xl">
                <div class="rounded-[2rem] bg-[#0c140c] p-5 border border-white/5 overflow-hidden">
                  <!-- Status Bar -->
                  <div class="flex items-center justify-between text-[11px] text-gray-400 mb-6 px-1">
                    <span class="font-semibold text-white">09:41</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-[9px] px-1 py-0.2 rounded bg-emerald/20 text-emerald font-bold">5G</span>
                      <svg class="w-3.5 h-3.5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.27 19.64 10.59 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                      </svg>
                      <div class="w-4 h-2 rounded-sm border border-gray-400 flex items-center p-0.5">
                        <div class="w-full h-full bg-emerald rounded-2xs"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Scanner Header -->
                  <div class="text-center mb-5">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20">
                      <span class="w-2 h-2 rounded-full bg-emerald animate-ping"></span>
                      <span class="text-[10px] font-bold text-emerald uppercase tracking-wider">Leitor Bio-Rastreio Ativo</span>
                    </div>
                  </div>

                  <!-- QR Code Scanner Box -->
                  <div class="relative w-48 h-48 mx-auto rounded-2xl p-3 bg-white/[0.04] border border-emerald/40 flex items-center justify-center mb-5 overflow-hidden">
                    <!-- Scanner Laser Beam Animation -->
                    <div class="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald to-transparent animate-bounce shadow-lg shadow-emerald"></div>

                    <!-- Visual Stylized QR Grid -->
                    <div class="w-36 h-36 bg-white p-2.5 rounded-xl shadow-inner grid grid-cols-7 grid-rows-7 gap-1">
                      @for (cell of qrMatrix; track $index) {
                        <div
                          class="rounded-xs transition-colors duration-500"
                          [class]="cell ? 'bg-[#0f1a0f]' : 'bg-transparent'"
                        ></div>
                      }
                    </div>
                  </div>

                  <!-- RFID / NFC Pill Indicator -->
                  <div class="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-emerald/20 mb-4">
                    <div class="flex items-center gap-2">
                      <div class="w-6 h-6 rounded-lg bg-emerald/20 flex items-center justify-center text-emerald">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span class="text-xs font-semibold text-white">Chip RFID / NFC</span>
                    </div>
                    <span class="text-[10px] font-mono text-emerald bg-emerald/10 px-2 py-0.5 rounded border border-emerald/20">
                      {{ oasisService.activeAsset().rfidTag }}
                    </span>
                  </div>

                  <!-- Scanned Telemetry Output Data -->
                  <div class="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs">
                    <div class="flex justify-between items-center pb-2 border-b border-white/5">
                      <span class="text-gray-400">Espécie:</span>
                      <span class="text-white font-medium italic">{{ oasisService.activeAsset().speciesScientificName }}</span>
                    </div>
                    <div class="flex justify-between items-center pb-2 border-b border-white/5">
                      <span class="text-gray-400">Lote Certificado:</span>
                      <span class="text-emerald font-mono font-bold">{{ oasisService.activeAsset().batchNumber }}</span>
                    </div>
                    <div class="flex justify-between items-center pb-2 border-b border-white/5">
                      <span class="text-gray-400">Origem:</span>
                      <span class="text-gray-300">{{ oasisService.activeAsset().poleOrigin }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-400">Índice Vitalidade:</span>
                      <span class="text-emerald font-bold">{{ oasisService.activeAsset().healthIndex }}% (Excelente)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: SaaS Model & Pre-billed Contracts (7 Cols) -->
          <div class="lg:col-span-7 space-y-8">
            <div>
              <span class="px-3.5 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-xs font-bold text-emerald uppercase tracking-wider">
                Modelo Econômico
              </span>
              <h3 class="text-3xl lg:text-4xl font-extrabold text-white mt-4 mb-4 tracking-tight">
                SaaS — <span class="bg-gradient-to-r from-emerald via-emerald-light to-white bg-clip-text text-transparent">Sustainability as a Service</span>
              </h3>
              <p class="text-gray-300 text-base leading-relaxed">
                Superamos o modelo arcaico de aquisição pontual de plantas. Na Rede Oásis, a infraestrutura verde é contratada como um serviço contínuo de engenharia, com faturamento recorrente, auditorias digitais e SLA garantido.
              </p>
            </div>

            <!-- Stylized Bullet Points -->
            <div class="space-y-4">
              <!-- Bullet 1: Contratos Pré-Faturados -->
              <div class="p-5 rounded-2xl glass border border-emerald/20 hover:border-emerald/40 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center text-white shrink-0 shadow-lg shadow-forest/25">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-white mb-1">Contratos Pré-Faturados com Previsibilidade</h4>
                    <p class="text-sm text-gray-300 leading-relaxed">
                      Concessionárias, mineradoras e municípios contratam capacidade biológica reservada mensalmente. O viveirista recebe remuneração antecipada estável e o cliente tem garantia ininterrupta de estoque e manutenção.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Bullet 2: Rastreabilidade Biométrica Integrada -->
              <div class="p-5 rounded-2xl glass border border-emerald/20 hover:border-emerald/40 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center text-white shrink-0 shadow-lg shadow-forest/25">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-white mb-1">Certificação Digital & Rastreabilidade de Origem</h4>
                    <p class="text-sm text-gray-300 leading-relaxed">
                      Cada módulo vegetal possui identidade criptográfica única vinculada a tags RFID/QR, registrando matriz parental, viveiro de origem, histórico fitossanitário e coordenadas de plantio em livro-razão imutável.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Bullet 3: Telemetria de Solo e Relatórios ESG Auditáveis -->
              <div class="p-5 rounded-2xl glass border border-emerald/20 hover:border-emerald/40 transition-all duration-300">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center text-white shrink-0 shadow-lg shadow-forest/25">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-white mb-1">Telemetria de Campo e Relatórios ESG para Auditoria</h4>
                    <p class="text-sm text-gray-300 leading-relaxed">
                      Painel com métricas automatizadas de fixação de carbono, estabilização de encostas e retenção hídrica, pronto para auditorias de conformidade com padrões GRI, SASB e taxonomias verdes internacionais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TraceabilityComponent {
  protected readonly oasisService = inject(OasisNetworkService);

  readonly qrMatrix: boolean[] = [
    true, true, true, true, true, true, true,
    true, false, false, false, false, false, true,
    true, false, true, true, true, false, true,
    true, false, true, false, true, false, true,
    true, false, true, true, true, false, true,
    true, false, false, false, false, false, true,
    true, true, true, true, true, true, true,
  ];
}
