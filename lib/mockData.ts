import { Activity, Heart, Thermometer, Wind } from 'lucide-react'

export interface VitalSign {
  id: string
  name: string
  value: number
  unit: string
  status: 'normal' | 'warning' | 'critical'
  icon: typeof Heart
  range: string
}

export const mockVitalSigns: VitalSign[] = [
  {
    id: 'hr',
    name: 'Heart Rate',
    value: 72,
    unit: 'bpm',
    status: 'normal',
    icon: Heart,
    range: '60-100'
  },
  {
    id: 'temp',
    name: 'Temperature',
    value: 36.8,
    unit: '°C',
    status: 'normal',
    icon: Thermometer,
    range: '36.1-37.2'
  },
  {
    id: 'resp',
    name: 'Respiratory Rate',
    value: 16,
    unit: '/min',
    status: 'normal',
    icon: Wind,
    range: '12-20'
  },
  {
    id: 'spo2',
    name: 'SpO2',
    value: 98,
    unit: '%',
    status: 'normal',
    icon: Activity,
    range: '95-100'
  }
]

export const mockChartData = [
  { time: '00:00', value: 70 },
  { time: '04:00', value: 68 },
  { time: '08:00', value: 72 },
  { time: '12:00', value: 75 },
  { time: '16:00', value: 73 },
  { time: '20:00', value: 71 },
  { time: '24:00', value: 70 }
]
