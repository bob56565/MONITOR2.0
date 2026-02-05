'use client'

import { useState } from 'react'
import { BiomarkerInput as BiomarkerInputType, MonitorResponse } from '@/types/monitor'
import { BiomarkerInput } from '@/components/BiomarkerInput'
import { ResultsDashboard } from '@/components/ResultsDashboard'
import { motion } from 'framer-motion'
import { Activity, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { demoMonitorResponse } from '@/lib/demoResponse'

export default function AnalyzePage() {
  const [biomarkers, setBiomarkers] = useState<BiomarkerInputType[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<MonitorResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [usedDemoData, setUsedDemoData] = useState(false)
  const [demoNotice, setDemoNotice] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (biomarkers.length === 0) {
      setError('Please add at least one biomarker')
      return
    }

    setIsAnalyzing(true)
    setError(null)
    setDemoNotice(null)
    setUsedDemoData(false)

    try {
      const workerUrl = process.env.NEXT_PUBLIC_MONITOR_WORKER_URL?.trim()
      const targetUrl = workerUrl ? `${workerUrl.replace(/\/$/, '')}/analyze?mode=a2` : null

      if (!targetUrl) {
        setResults(demoMonitorResponse)
        setUsedDemoData(true)
        setDemoNotice('Running in demo mode. Set NEXT_PUBLIC_MONITOR_WORKER_URL to use your live worker.')
        return
      }

      const response = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          biomarkers,
        }),
      })

      if (!response.ok) {
        throw new Error('Analysis failed')
      }

      const data = await response.json()
      setResults(data)
    } catch (err) {
      setResults(demoMonitorResponse)
      setUsedDemoData(true)
      setDemoNotice('Live analysis failed, showing demo results instead. Check NEXT_PUBLIC_MONITOR_WORKER_URL if you have a worker available.')
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleReset = () => {
    setResults(null)
    setBiomarkers([])
    setError(null)
    setUsedDemoData(false)
    setDemoNotice(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-medical-50 to-medical-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-medical-600 hover:text-medical-700 mb-4 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-8 h-8 text-medical-600" />
            <h1 className="text-4xl font-serif font-bold text-medical-900">
              Biomarker Analysis
            </h1>
          </div>
          <p className="text-lg text-warm-600">
            Clinical cascade inference engine for physiological state analysis
          </p>
        </div>

        {!results ? (
          <div className="space-y-6">
            <BiomarkerInput
              biomarkers={biomarkers}
              onChange={setBiomarkers}
            />

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-900"
              >
                {error}
              </motion.div>
            )}

            <div className="flex justify-center">
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing || biomarkers.length === 0}
                className="px-8 py-4 bg-medical-600 text-white rounded-xl font-semibold text-lg hover:bg-medical-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                {isAnalyzing ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Analyzing...
                  </span>
                ) : (
                  'Run Analysis'
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {usedDemoData && demoNotice && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-900">
                {demoNotice}
              </div>
            )}

            <ResultsDashboard response={results} />

            <div className="flex justify-center">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-warm-600 text-white rounded-xl font-semibold hover:bg-warm-700 transition-all shadow-lg"
              >
                New Analysis
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
