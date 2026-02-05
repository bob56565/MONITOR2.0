'use client'

import { MonitorResponse } from '@/types/monitor'
import { StateCard } from './StateCard'
import { LabAnchoring } from './LabAnchoring'
import { ExecutiveSummary } from './ExecutiveSummary'
import { TabsContainer } from './ui/TabsContainer'
import { cn } from '@/lib/utils'

interface ResultsDashboardProps {
  response: MonitorResponse
  className?: string
}

export function ResultsDashboard({ response, className }: ResultsDashboardProps) {
  const tabItems = [
    {
      value: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-6">
          <ExecutiveSummary response={response} />
          
          <div>
            <h3 className="text-2xl font-semibold text-medical-900 mb-4">
              Physiological States
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {response.physiological_states.map((state, index) => (
                <StateCard key={index} state={state} />
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      value: 'cascade',
      label: 'Cascade Analysis',
      content: (
        <div className="space-y-6">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-lg">
            <h3 className="text-xl font-semibold text-medical-900 mb-4">
              Cascade Tree Visualization
            </h3>
            <div className="space-y-3">
              {response.cascade_tree.map((node, index) => (
                <div
                  key={index}
                  className="p-4 bg-medical-50 rounded-xl border border-medical-200"
                  style={{ marginLeft: `${node.iteration * 20}px` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-medical-900">{node.name}</h4>
                      <p className="text-sm text-warm-600">
                        Method: {node.method} | Iteration: {node.iteration}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-medical-900">
                        {typeof node.value === 'number' 
                          ? node.value.toFixed(2) 
                          : String(node.value)}
                      </div>
                      <div className="text-xs text-warm-600">
                        Confidence: {(node.confidence.score * 100).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                      {node.confidence.evidence_grade}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                      Depth: {node.confidence.cascade_depth}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                      {node.confidence.sensitivity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      value: 'citations',
      label: 'Lab Anchoring',
      content: <LabAnchoring cascadeTree={response.cascade_tree} />
    }
  ]

  return (
    <div className={cn("w-full", className)}>
      <TabsContainer items={tabItems} defaultValue="overview" />
    </div>
  )
}
