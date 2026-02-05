export interface Patient {
  id: string
  name: string
  age: number
  roomNumber: string
  admissionDate: string
  condition: 'stable' | 'monitoring' | 'critical'
}

export interface Alert {
  id: string
  patientId: string
  type: 'warning' | 'critical'
  message: string
  timestamp: string
  acknowledged: boolean
}

export interface MonitoringSession {
  id: string
  patientId: string
  startTime: string
  endTime?: string
  vitals: {
    timestamp: string
    heartRate: number
    temperature: number
    respiratoryRate: number
    spo2: number
    bloodPressure: {
      systolic: number
      diastolic: number
    }
  }[]
}
