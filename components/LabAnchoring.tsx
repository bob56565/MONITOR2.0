'use client'

import { CascadeNode } from '@/types/monitor'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'

interface LabAnchoringProps {
  cascadeTree: CascadeNode[]
  className?: string
}

export function LabAnchoring({ cascadeTree, className }: LabAnchoringProps) {
  const labAnchoredNodes = cascadeTree.filter(node => 
    node.citation && node.citation.source
  )

  const getConfidenceColor = (score: number) => {
    if (score >= 0.9) return 'text-green-600 bg-green-50'
    if (score >= 0.7) return 'text-blue-600 bg-blue-50'
    if (score >= 0.5) return 'text-yellow-600 bg-yellow-50'
    return 'text-red-600 bg-red-50'
  }

  const getEvidenceGradeBadge = (grade: string) => {
    const colors = {
      direct: 'bg-green-100 text-green-800',
      derived: 'bg-blue-100 text-blue-800',
      cascade: 'bg-purple-100 text-purple-800',
      peer_reviewed: 'bg-indigo-100 text-indigo-800'
    }
    return colors[grade as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-lg">
        <h3 className="text-xl font-semibold text-medical-900 mb-4">
          Lab Anchoring & Citations
        </h3>
        
        {labAnchoredNodes.length === 0 ? (
          <p className="text-warm-600 text-center py-8">
            No lab-anchored nodes available
          </p>
        ) : (
          <div className="space-y-3">
            {labAnchoredNodes.map((node, index) => (
              <div
                key={index}
                className="p-4 bg-medical-50 rounded-xl border border-medical-100 hover:border-medical-300 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-medical-900 mb-1">
                      {node.name}
                    </h4>
                    <p className="text-sm text-warm-600">
                      Method: {node.method} | Iteration: {node.iteration}
                    </p>
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium",
                    getConfidenceColor(node.confidence.score)
                  )}>
                    {(node.confidence.score * 100).toFixed(0)}%
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={cn(
                    "text-xs px-2 py-1 rounded-full font-medium",
                    getEvidenceGradeBadge(node.confidence.evidence_grade)
                  )}>
                    {node.confidence.evidence_grade.toUpperCase()}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                    Depth: {node.confidence.cascade_depth}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800 font-medium">
                    {node.confidence.sensitivity}
                  </span>
                  {node.confidence.citation_backed && (
                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium">
                      Citation Backed
                    </span>
                  )}
                </div>

                {node.citation && (
                  <div className="mt-3 p-3 bg-white rounded-lg border border-medical-200">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium text-medical-900">
                          {node.citation.source}
                        </p>
                        <p className="text-xs text-warm-600">
                          PMID: {node.citation.pmid}
                        </p>
                        <p className="text-xs text-warm-600">
                          Validation: {node.citation.validation}
                        </p>
                      </div>
                      <a
                        href={`https://pubmed.ncbi.nlm.nih.gov/${node.citation.pmid}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-medical-600 hover:text-medical-700 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}

                {node.interpretation && (
                  <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm font-medium text-yellow-900 mb-1">
                      Risk: {node.interpretation.risk}
                    </p>
                    {node.interpretation.note && (
                      <p className="text-xs text-yellow-800">
                        {node.interpretation.note}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
