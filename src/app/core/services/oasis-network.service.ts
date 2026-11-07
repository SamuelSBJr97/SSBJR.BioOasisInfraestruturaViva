import { Injectable, signal, computed } from '@angular/core';
import { RegionalPole, BiologicalModule, TraceableAsset } from '../models/oasis.models';

@Injectable({
  providedIn: 'root',
})
export class OasisNetworkService {
  // Signals for state
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

  readonly activeAsset = signal<TraceableAsset>({
    rfidTag: 'NFC-RO-8849-BIO',
    qrCodeId: 'QR-RO-BR-2024-0847',
    speciesScientificName: 'Vetiveria zizanioides / Schizolobium parahyba',
    speciesCommonName: 'Capim Vetiver & Guapuruvú Geotécnico',
    batchNumber: 'RO-NE-2024-0847',
    poleOrigin: 'Polo Nordeste #12 (Viveiro Mãe da Mata)',
    healthIndex: 98.4,
    verifiedAt: '2026-11-07T00:15:00Z',
  });

  // Computed metrics
  readonly totalPoles = computed(() => this.poles().length);
  readonly totalNurseries = computed(() =>
    this.poles().reduce((acc, pole) => acc + pole.nurseryPartners, 0)
  );
  readonly totalCatalogedSpecies = computed(() =>
    this.poles().reduce((acc, pole) => acc + pole.speciesCount, 0)
  );
}
