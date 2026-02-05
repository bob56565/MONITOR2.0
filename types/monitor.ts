// Type definitions matching MONITOR v3.8.0 Worker output exactly

export interface Citation {
  pmid: string
  source: string
  validation: string
}

export interface ConfidenceScore {
  score: number
  evidence_grade: 'direct' | 'derived' | 'cascade' | 'peer_reviewed'
  sensitivity: 'stable' | 'moderate' | 'fragile'
  cross_panel: 'consistent' | 'flagged' | 'invalid'
  cascade_depth: number
  citation_backed: boolean
}

export interface CascadeNode {
  name: string
  value: number | string | object
  method: string
  confidence: ConfidenceScore
  iteration: number
  citation?: Citation
  interpretation?: {
    risk: string
    note?: string
  }
}

export interface PhysiologicalState {
  name: string
  evaluated: boolean
  state: string
  score: number
  factors: string[]
  confidence: number
  lab_anchors: string
  recommended_action: string
  signal_coverage: string
  inputs_used?: Record<string, any>
}

export interface MonitorResponse {
  status: 'success' | 'error'
  version: string
  timestamp: string
  patient_id?: string
  cascade_iterations: number
  physiological_states: PhysiologicalState[]
  cascade_tree: CascadeNode[]
  executive_summary: {
    overall_health: string
    priority_concerns: string[]
    recommendations: string[]
  }
  computation_metadata: {
    compute_time_ms: number
    nodes_evaluated: number
    confidence_threshold: number
  }
}

export interface BiomarkerInput {
  name: string
  value: number
  unit: string
  reference_range?: {
    min: number
    max: number
  }
}

export interface AnalysisRequest {
  biomarkers: BiomarkerInput[]
  patient_demographics?: {
    age?: number
    sex?: 'M' | 'F' | 'Other'
    conditions?: string[]
  }
}
