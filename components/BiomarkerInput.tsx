'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import { BiomarkerInput as BiomarkerInputType } from '@/types/monitor'
import { cn } from '@/lib/utils'

interface BiomarkerInputProps {
  biomarkers: BiomarkerInputType[]
  onChange: (biomarkers: BiomarkerInputType[]) => void
  className?: string
}

export function BiomarkerInput({ biomarkers, onChange, className }: BiomarkerInputProps) {
  const [inputName, setInputName] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [inputUnit, setInputUnit] = useState('')

  const addBiomarker = () => {
    if (inputName && inputValue) {
      const newBiomarker: BiomarkerInputType = {
        name: inputName,
        value: parseFloat(inputValue),
        unit: inputUnit || 'units'
      }
      onChange([...biomarkers, newBiomarker])
      setInputName('')
      setInputValue('')
      setInputUnit('')
    }
  }

  const removeBiomarker = (index: number) => {
    onChange(biomarkers.filter((_, i) => i !== index))
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-lg">
        <h3 className="text-xl font-semibold text-medical-900 mb-4">
          Add Biomarkers
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          <input
            type="text"
            placeholder="Biomarker name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="px-4 py-2 rounded-lg border border-medical-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all"
          />
          <input
            type="number"
            placeholder="Value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-4 py-2 rounded-lg border border-medical-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all"
          />
          <input
            type="text"
            placeholder="Unit (e.g., mg/dL)"
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value)}
            className="px-4 py-2 rounded-lg border border-medical-200 focus:border-medical-500 focus:ring-2 focus:ring-medical-200 outline-none transition-all"
          />
          <button
            onClick={addBiomarker}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-medical-500 text-white rounded-lg hover:bg-medical-600 transition-colors font-medium"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        {biomarkers.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-warm-700 mb-2">
              Current Biomarkers ({biomarkers.length})
            </p>
            {biomarkers.map((biomarker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-between p-3 bg-medical-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="font-medium text-medical-900">
                    {biomarker.name}
                  </span>
                  <span className="text-warm-600">
                    {biomarker.value} {biomarker.unit}
                  </span>
                </div>
                <button
                  onClick={() => removeBiomarker(index)}
                  className="p-1 hover:bg-red-100 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-red-600" />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
