export type PoleStatus = 'em_planejamento' | 'meta_expansao' | 'polo_piloto';

export interface RegionalPole {
  id: string;
  name: string;
  targetRegion: string;
  status: PoleStatus;
  targetSpeciesCount: number;
  currentSpeciesCount: number;
  targetNurseryPartners: number;
  currentNurseryPartners: number;
  latitude: number;
  longitude: number;
  targetBiomes: string[];
}

export interface BiologicalModule {
  id: string;
  name: string;
  category: 'geotecnica' | 'hidrica' | 'remediacao';
  description: string;
  specifications: string[];
  readinessTimeHours: number;
}

export interface TraceableAsset {
  isPrototype: boolean;
  rfidTag: string;
  qrCodeId: string;
  speciesScientificName: string;
  speciesCommonName: string;
  applicationType: string;
  batchNumber: string;
  poleOrigin: string;
  healthIndex: number;
  rootTensileStrengthMPa: number;
  soilMoisturePercentage: number;
  co2AbsorptionAnnualKg: number;
  verifiedAt: string;
}

export interface SaaSContract {
  id: string;
  clientName: string;
  infrastructureType: string;
  monthlyPreBilledValue: number;
  slaUptimePercentage: number;
  telemetryActive: boolean;
}
