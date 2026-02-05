import { MonitorResponse } from '@/types/monitor'

export const demoMonitorResponse: MonitorResponse = {
  status: 'success',
  version: '3.9.0',
  timestamp: '2026-02-05T12:00:00Z',
  patient_id: 'DEMO-2048',
  cascade_iterations: 3,
  physiological_states: [
    {
      name: 'Cardiometabolic Fitness',
      evaluated: true,
      state: 'Optimal',
      score: 8.7,
      factors: ['Resting HR in target', 'HRV strong', 'BP well-controlled'],
      confidence: 0.86,
      lab_anchors: 'hs-CRP, BNP, fasting insulin',
      recommended_action: 'Maintain training schedule and hydration',
      signal_coverage: '6/6 biomarkers'
    },
    {
      name: 'Inflammation Burden',
      evaluated: true,
      state: 'Mild warning',
      score: 6.3,
      factors: ['CRP trending upward', 'Cortisol elevated post-load'],
      confidence: 0.71,
      lab_anchors: 'hs-CRP, cortisol',
      recommended_action: 'Add recovery day; prioritize sleep and hydration',
      signal_coverage: '4/6 biomarkers'
    },
    {
      name: 'Metabolic Flexibility',
      evaluated: true,
      state: 'Moderate risk',
      score: 5.4,
      factors: ['Fasting insulin elevated', 'Glucose variability present'],
      confidence: 0.67,
      lab_anchors: 'Fasting insulin, HbA1c',
      recommended_action: '12-hour fasting window; re-check labs in 3 weeks',
      signal_coverage: '5/6 biomarkers'
    }
  ],
  cascade_tree: [
    {
      name: 'Baseline normalization',
      value: 0.92,
      method: 'Z-score normalization',
      confidence: {
        score: 0.88,
        evidence_grade: 'derived',
        sensitivity: 'stable',
        cross_panel: 'consistent',
        cascade_depth: 1,
        citation_backed: false
      },
      iteration: 0
    },
    {
      name: 'Inflammation signal',
      value: 0.24,
      method: 'hs-CRP weighted mean',
      confidence: {
        score: 0.84,
        evidence_grade: 'direct',
        sensitivity: 'stable',
        cross_panel: 'consistent',
        cascade_depth: 1,
        citation_backed: true
      },
      citation: {
        pmid: '36288322',
        source: 'hs-CRP cardiovascular risk study',
        validation: 'RCT meta-analysis'
      },
      interpretation: {
        risk: 'low',
        note: 'Within optimal anti-inflammatory range'
      },
      iteration: 1
    },
    {
      name: 'Insulin resistance likelihood',
      value: 0.41,
      method: 'Fasting insulin + HOMA-IR blend',
      confidence: {
        score: 0.76,
        evidence_grade: 'cascade',
        sensitivity: 'moderate',
        cross_panel: 'flagged',
        cascade_depth: 2,
        citation_backed: true
      },
      citation: {
        pmid: '30429127',
        source: 'HOMA-IR progression tracking',
        validation: 'Longitudinal cohort'
      },
      interpretation: {
        risk: 'moderate',
        note: 'Pattern matches early-stage insulin resistance'
      },
      iteration: 2
    }
  ],
  executive_summary: {
    overall_health: 'Optimal with mild metabolic risk',
    priority_concerns: [
      'Slight rise in fasting insulin',
      'Recovery load approaching limit'
    ],
    recommendations: [
      'Keep aerobic conditioning 4x/week with 1 active recovery day',
      'Add 12-hour overnight fasting window and hydrate with electrolytes',
      'Re-check fasting insulin, hs-CRP, and cortisol in 3-4 weeks'
    ]
  },
  computation_metadata: {
    compute_time_ms: 180,
    nodes_evaluated: 24,
    confidence_threshold: 0.62
  }
}