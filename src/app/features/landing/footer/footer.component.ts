import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  template: `
    <footer id="footer" class="relative pt-24 pb-12 bg-[#0a120a] border-t border-emerald/20 overflow-hidden">
      <!-- Glow ambient effect -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-forest/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <!-- Brand Column (4 Cols) -->
          <div class="lg:col-span-4 space-y-5">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-forest to-emerald flex items-center justify-center shadow-lg shadow-forest/30">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span class="text-xl font-extrabold text-white tracking-tight">
                Rede <span class="text-emerald">Oásis</span>
              </span>
            </div>

            <p class="text-sm text-gray-400 leading-relaxed max-w-sm">
              Infraestrutura biológica descentralizada para resiliência territorial e proteção de ativos de missão crítica em escala nacional.
            </p>

            <div class="pt-2 text-xs text-gray-500">
              <p>Tecnologia com DNA Brasileiro 🇧🇷</p>
              <p class="mt-1">Padrão Enterprise pronto para SaaS & IoT</p>
            </div>
          </div>

          <!-- Links Column 1: Plataforma (2 Cols) -->
          <div class="lg:col-span-2">
            <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-4">Plataforma</h4>
            <ul class="space-y-3">
              <li><a href="#hero" class="text-sm text-gray-400 hover:text-emerald transition-colors">Início</a></li>
              <li><a href="#paradigm" class="text-sm text-gray-400 hover:text-emerald transition-colors">Mudança de Paradigma</a></li>
              <li><a href="#regional" class="text-sm text-gray-400 hover:text-emerald transition-colors">Oásis Regionais</a></li>
              <li><a href="#traceability" class="text-sm text-gray-400 hover:text-emerald transition-colors">Rastreabilidade</a></li>
              <li>
                <span class="text-sm text-gray-500 flex items-center gap-1.5 cursor-not-allowed">
                  Telemetria Live
                  <span class="text-[9px] px-1.5 py-0.5 rounded bg-emerald/10 text-emerald border border-emerald/20 font-bold uppercase">Breve</span>
                </span>
              </li>
            </ul>
          </div>

          <!-- Links Column 2: Rede (2 Cols) -->
          <div class="lg:col-span-2">
            <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-4">Comunidade</h4>
            <ul class="space-y-3">
              <li><a href="#regional" class="text-sm text-gray-400 hover:text-emerald transition-colors">Viveiristas Parceiros</a></li>
              <li><a href="#paradigm" class="text-sm text-gray-400 hover:text-emerald transition-colors">Engenheiros Ambientais</a></li>
              <li><a href="#traceability" class="text-sm text-gray-400 hover:text-emerald transition-colors">Contratos Corporativos</a></li>
              <li><a href="#footer" class="text-sm text-gray-400 hover:text-emerald transition-colors">Manifesto Aberto</a></li>
            </ul>
          </div>

          <!-- Lead Capture (4 Cols) -->
          <div class="lg:col-span-4">
            <div class="p-6 rounded-3xl glass border border-emerald/20">
              <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-2">Conecte-se à Rede</h4>
              <p class="text-xs text-gray-400 mb-5 leading-relaxed">
                Cadastre-se para receber relatórios técnicos, integrar seu viveiro ou solicitar estudo preliminar de risco geotécnico.
              </p>

              @if (submitted()) {
                <div class="p-4 rounded-2xl bg-emerald/10 border border-emerald/30">
                  <div class="flex items-center gap-2.5">
                    <div class="w-6 h-6 rounded-full bg-emerald/20 flex items-center justify-center shrink-0">
                      <svg class="w-4 h-4 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-emerald">Cadastro Realizado com Sucesso!</p>
                      <p class="text-[11px] text-gray-300 mt-0.5">Nossa equipe de engenharia biológica entrará em contato.</p>
                    </div>
                  </div>
                </div>
              } @else {
                <form (ngSubmit)="onSubmit()" class="space-y-3">
                  <div>
                    <select
                      [(ngModel)]="interestType"
                      name="interestType"
                      class="w-full px-4 py-2.5 rounded-xl bg-dark-bg/90 border border-white/10 text-gray-300 text-xs focus:outline-none focus:border-emerald/50 transition-colors cursor-pointer"
                    >
                      <option value="empresa">Empresa / Infraestrutura Crítica</option>
                      <option value="viveirista">Viveirista / Produtor de Base</option>
                      <option value="governo">Setor Público / Defesa Civil</option>
                      <option value="pesquisador">Pesquisador / Especialista</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="email"
                      [(ngModel)]="email"
                      name="email"
                      placeholder="seu@corporativo.com"
                      required
                      class="w-full px-4 py-2.5 rounded-xl bg-dark-bg/90 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-emerald/50 focus:ring-1 focus:ring-emerald/40 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    [disabled]="!email"
                    class="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-forest to-emerald-dark text-white text-xs font-bold uppercase tracking-wider hover:from-forest-dark hover:to-forest transition-all duration-300 shadow-lg shadow-forest/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Ingressar no Ecossistema
                  </button>
                </form>
              }
            </div>
          </div>
        </div>

        <!-- Sub-footer Bottom Bar -->
        <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Rede Oásis. Infraestrutura Biológica Descentralizada. Todos os direitos reservados.</p>
          <div class="flex items-center gap-6">
            <a href="#hero" class="hover:text-emerald transition-colors">Termos de Governança</a>
            <a href="#hero" class="hover:text-emerald transition-colors">Política de Dados & Telemetria</a>
            <a href="#hero" class="hover:text-emerald transition-colors">Segurança</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  email = '';
  interestType = 'empresa';
  readonly submitted = signal(false);

  onSubmit() {
    if (this.email) {
      console.log('Lead Capturado na Rede Oásis:', {
        email: this.email,
        interesse: this.interestType,
        timestamp: new Date().toISOString(),
      });
      this.submitted.set(true);
    }
  }
}
