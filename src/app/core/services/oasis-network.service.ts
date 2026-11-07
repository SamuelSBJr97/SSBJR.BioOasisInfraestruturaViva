import { Injectable, signal, computed } from '@angular/core';
import { RegionalPole, TraceableAsset } from '../models/oasis.models';

@Injectable({
  providedIn: 'root',
})
export class OasisNetworkService {
  // Estado real do projeto: fase de estruturação e piloto (baseline zerado com metas projetadas)
  readonly isDevelopmentPhase = signal<boolean>(true);
  readonly currentActivePoles = signal<number>(0);
  readonly targetTotalPoles = signal<number>(5);
  readonly currentCatalogedSpecies = signal<number>(0);
  readonly targetTotalSpecies = signal<number>(150);
  readonly currentNurseries = signal<number>(0);
  readonly targetTotalNurseries = signal<number>(50);

  // Polos regionais projetados (objetivos de alcance geográfico no plano de desenvolvimento)
  readonly poles = signal<RegionalPole[]>([
    {
      id: 'pole-norte',
      name: 'Polo Norte (Meta)',
      targetRegion: 'Meta Geográfica: Região Amazônica (Em Mapeamento)',
      status: 'meta_expansao',
      currentSpeciesCount: 0,
      targetSpeciesCount: 60,
      currentNurseryPartners: 0,
      targetNurseryPartners: 15,
      latitude: -3.119,
      longitude: -60.021,
      targetBiomes: ['Amazônia'],
    },
    {
      id: 'pole-nordeste',
      name: 'Polo Nordeste (Meta)',
      targetRegion: 'Meta Geográfica: Caatinga & Faixa Litorânea (Em Articulação)',
      status: 'meta_expansao',
      currentSpeciesCount: 0,
      targetSpeciesCount: 45,
      currentNurseryPartners: 0,
      targetNurseryPartners: 12,
      latitude: -8.047,
      longitude: -34.877,
      targetBiomes: ['Caatinga', 'Mata Atlântica'],
    },
    {
      id: 'pole-centro-oeste',
      name: 'Polo Centro-Oeste (Meta)',
      targetRegion: 'Meta Geográfica: Cerrado Central (Em Prospecção)',
      status: 'meta_expansao',
      currentSpeciesCount: 0,
      targetSpeciesCount: 50,
      currentNurseryPartners: 0,
      targetNurseryPartners: 10,
      latitude: -15.797,
      longitude: -47.864,
      targetBiomes: ['Cerrado', 'Pantanal'],
    },
    {
      id: 'pole-sudeste',
      name: 'Polo Sudeste (Polo Piloto)',
      targetRegion: 'Polo Piloto Inicial: Serra do Mar / Vale (Fase de Validação Técnica)',
      status: 'polo_piloto',
      currentSpeciesCount: 0,
      targetSpeciesCount: 70,
      currentNurseryPartners: 0,
      targetNurseryPartners: 20,
      latitude: -23.55,
      longitude: -46.633,
      targetBiomes: ['Mata Atlântica'],
    },
    {
      id: 'pole-sul',
      name: 'Polo Sul (Meta)',
      targetRegion: 'Meta Geográfica: Bacias Hidrográficas do Sul (Em Planejamento)',
      status: 'meta_expansao',
      currentSpeciesCount: 0,
      targetSpeciesCount: 35,
      currentNurseryPartners: 0,
      targetNurseryPartners: 8,
      latitude: -25.428,
      longitude: -49.273,
      targetBiomes: ['Pampa', 'Mata Atlântica'],
    },
  ]);

  // Protótipos Conceituais para Demonstração de Rastreabilidade (Mockups)
  readonly traceableAssetsCatalog = signal<TraceableAsset[]>([
    {
      isPrototype: true,
      rfidTag: 'PROTOTIPO-RFID-001',
      qrCodeId: 'DEMO-RO-GEO-VETIVER',
      speciesScientificName: 'Vetiveria zizanioides (Espécie em Estudo Piloto)',
      speciesCommonName: 'Capim Vetiver (Módulo Geotécnico de Demonstração)',
      applicationType: 'Contenção de Encostas & Taludes (Arquitetura Projetada)',
      batchNumber: 'LOTE-CONCEITO-01',
      poleOrigin: 'Ambiente de Testes / Projeção Polo Piloto Sudeste',
      healthIndex: 0,
      rootTensileStrengthMPa: 0,
      soilMoisturePercentage: 0,
      co2AbsorptionAnnualKg: 0,
      verifiedAt: 'Fase de Validação Laboratorial e de Campo',
    },
    {
      isPrototype: true,
      rfidTag: 'PROTOTIPO-RFID-002',
      qrCodeId: 'DEMO-RO-WET-TYPHA',
      speciesScientificName: 'Typha domingensis (Espécie em Estudo Piloto)',
      speciesCommonName: 'Taboa Filtrante (Módulo Wetland de Demonstração)',
      applicationType: 'Depuração Hídrica & Filtros Naturais (Arquitetura Projetada)',
      batchNumber: 'LOTE-CONCEITO-02',
      poleOrigin: 'Ambiente de Testes / Projeção Polo Nordeste',
      healthIndex: 0,
      rootTensileStrengthMPa: 0,
      soilMoisturePercentage: 0,
      co2AbsorptionAnnualKg: 0,
      verifiedAt: 'Fase de Modelagem de Filtros Hídricos',
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
}
