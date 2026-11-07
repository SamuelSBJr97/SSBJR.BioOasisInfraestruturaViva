export interface RegionalPole {
  id: string;
  name: string;
  location: string;
  status: 'operacional' | 'em_expansao' | 'planejado';
  speciesCount: number;
  nurseryPartners: number;
  latitude: number;
  longitude: number;
  primaryBiomes: string[];
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

export interface RoiSimulationResult {
  estimatedCostOasis: number;
  estimatedCostTraditionalConcrete: number;
  financialSavings: number;
  savingsPercentage: number;
  co2OffsetTonsAnnual: number;
  nurseriesSupported: number;
}
