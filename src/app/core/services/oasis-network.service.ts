import { Injectable, signal, computed } from '@angular/core';
import {
  RegionalPole,
  TraceableAsset,
  RoiSimulationResult,
} from '../models/oasis.models';

@Injectable({
  providedIn: 'root',
})
export class OasisNetworkService {
  // Polos regionais
  readonly poles = signal<RegionalPole[]>([
    {
      id: 'pole-norte',
      name: 'Polo Norte',
      location: 'Manaus / Região Amazônica',
      status: 'operacional',
      speciesCount: 64,
      nurseryPartners: 18,
      latitude: -3.119,
      longitude: -60.021,
      primaryBiomes: ['Amazônia'],
    },
    {
      id: 'pole-nordeste',
      name: 'Polo Nordeste',
      location: 'Recife / Mata Atlântica & Caatinga',
      status: 'operacional',
      speciesCount: 48,
      nurseryPartners: 24,
      latitude: -8.047,
      longitude: -34.877,
      primaryBiomes: ['Caatinga', 'Mata Atlântica'],
    },
    {
      id: 'pole-centro-oeste',
      name: 'Polo Centro-Oeste',
      location: 'Brasília / Cerrado Central',
      status: 'operacional',
      speciesCount: 52,
      nurseryPartners: 14,
      latitude: -15.797,
      longitude: -47.864,
      primaryBiomes: ['Cerrado', 'Pantanal'],
    },
    {
      id: 'pole-sudeste',
      name: 'Polo Sudeste',
      location: 'Vale do Paraíba / Serra do Mar',
      status: 'operacional',
      speciesCount: 72,
      nurseryPartners: 32,
      latitude: -23.55,
      longitude: -46.633,
      primaryBiomes: ['Mata Atlântica'],
    },
    {
      id: 'pole-sul',
      name: 'Polo Sul',
      location: 'Curitiba / Mata de Araucárias',
      status: 'operacional',
      speciesCount: 38,
      nurseryPartners: 16,
      latitude: -25.428,
      longitude: -49.273,
      primaryBiomes: ['Pampa', 'Mata Atlântica'],
    },
  ]);

  // Catálogo de Ativos Rastreados para Simulação Interativa
  readonly traceableAssetsCatalog = signal<TraceableAsset[]>([
    {
      rfidTag: 'NFC-RO-8849-BIO',
      qrCodeId: 'QR-RO-BR-2024-0847',
      speciesScientificName: 'Vetiveria zizanioides / Schizolobium parahyba',
      speciesCommonName: 'Capim Vetiver & Guapuruvú Geotécnico',
      applicationType: 'Contenção de Encostas & Taludes',
      batchNumber: 'RO-SE-2024-0847',
      poleOrigin: 'Polo Sudeste #07 (Viveiro Vale Vivo)',
      healthIndex: 98.4,
      rootTensileStrengthMPa: 75.2,
      soilMoisturePercentage: 42.1,
      co2AbsorptionAnnualKg: 380,
      verifiedAt: '2026-11-07T00:15:00Z',
    },
    {
      rfidTag: 'NFC-RO-9120-WET',
      qrCodeId: 'QR-RO-BR-2024-1290',
      speciesScientificName: 'Typha domingensis / Eichhornia crassipes',
      speciesCommonName: 'Taboa Filtrante & Macrófita Depuradora',
      applicationType: 'Depuração Hídrica & Wetlands',
      batchNumber: 'RO-NE-2024-1290',
      poleOrigin: 'Polo Nordeste #14 (BioViveiro Capibaribe)',
      healthIndex: 96.1,
      rootTensileStrengthMPa: 48.6,
      soilMoisturePercentage: 88.5,
      co2AbsorptionAnnualKg: 520,
      verifiedAt: '2026-11-07T00:32:00Z',
    },
    {
      rfidTag: 'NFC-RO-7431-REM',
      qrCodeId: 'QR-RO-BR-2024-3401',
      speciesScientificName: 'Helianthus annuus / Crotalaria juncea',
      speciesCommonName: 'Girassol Fitorremediador & Adubo Verde',
      applicationType: 'Fitorremediação de Solos & Mineração',
      batchNumber: 'RO-CO-2024-3401',
      poleOrigin: 'Polo Centro-Oeste #03 (Cerrado Germoplasma)',
      healthIndex: 99.2,
      rootTensileStrengthMPa: 62.0,
      soilMoisturePercentage: 35.8,
      co2AbsorptionAnnualKg: 440,
      verifiedAt: '2026-11-07T00:41:00Z',
    },
  ]);

  readonly activeAssetIndex = signal(0);

  readonly activeAsset = computed(() => {
    const catalog = this.traceableAssetsCatalog();
    return catalog[this.activeAssetIndex() % catalog.length];
  });

  cycleNextAsset(): void {
    this.activeAssetIndex.update((idx) => (idx + 1) % this.traceableAssetsCatalog().length);
  }

  // Métricas Computadas Globais
  readonly totalPoles = computed(() => this.poles().length);
  readonly totalNurseries = computed(() =>
    this.poles().reduce((acc, pole) => acc + pole.nurseryPartners, 0)
  );
  readonly totalCatalogedSpecies = computed(() =>
    this.poles().reduce((acc, pole) => acc + pole.speciesCount, 0)
  );

  // Simulação de ROI com Signals para Contratos SaaS de Bioengenharia
  calculateRoi(
    extensionMeters: number,
    moduleType: 'contencao' | 'depuracao' | 'remediacao'
  ): RoiSimulationResult {
    // Parâmetros de engenharia comparativa
    const multipliers = {
      contencao: { concretePerMeter: 4800, oasisPerMeter: 1650, co2Factor: 0.12, nurseryRate: 0.005 },
      depuracao: { concretePerMeter: 5400, oasisPerMeter: 1950, co2Factor: 0.15, nurseryRate: 0.006 },
      remediacao: { concretePerMeter: 6200, oasisPerMeter: 2200, co2Factor: 0.18, nurseryRate: 0.007 },
    };

    const cfg = multipliers[moduleType];
    const estimatedCostTraditionalConcrete = extensionMeters * cfg.concretePerMeter;
    const estimatedCostOasis = extensionMeters * cfg.oasisPerMeter;
    const financialSavings = estimatedCostTraditionalConcrete - estimatedCostOasis;
    const savingsPercentage = Math.round((financialSavings / estimatedCostTraditionalConcrete) * 100);
    const co2OffsetTonsAnnual = Math.round(extensionMeters * cfg.co2Factor);
    const nurseriesSupported = Math.max(1, Math.round(extensionMeters * cfg.nurseryRate));

    return {
      estimatedCostOasis,
      estimatedCostTraditionalConcrete,
      financialSavings,
      savingsPercentage,
      co2OffsetTonsAnnual,
      nurseriesSupported,
    };
  }
}
