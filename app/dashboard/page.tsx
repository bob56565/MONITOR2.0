'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { StatCard } from '@/components/ui/StatCard'
import { VitalCard } from '@/components/monitoring/VitalCard'
import { VitalChart } from '@/components/charts/VitalChart'
import { mockVitalSigns, mockChartData } from '@/lib/mockData'
import { Activity, Users, AlertTriangle, TrendingUp } from 'lucide-react'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-medical-50 to-medical-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-medical-900 mb-2">
            Clinical Dashboard
          </h1>
          <p className="text-warm-600">
            Real-time patient monitoring and analytics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Patients"
            value={24}
            change="+2 from yesterday"
            icon={Users}
            trend="up"
          />
          <StatCard
            title="Critical Alerts"
            value={3}
            change="Requires attention"
            icon={AlertTriangle}
            trend="down"
          />
          <StatCard
            title="Avg Response Time"
            value="2.5m"
            change="-30s from last hour"
            icon={TrendingUp}
            trend="up"
          />
          <StatCard
            title="System Status"
            value="98.5%"
            change="All systems operational"
            icon={Activity}
            trend="neutral"
          />
        </div>

        {/* Vital Signs Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-medical-900 mb-4">
            Vital Signs Monitor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockVitalSigns.map((vital) => (
              <VitalCard key={vital.id} vital={vital} />
            ))}
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <VitalChart
              data={mockChartData}
              title="Heart Rate Trend (24h)"
              stroke="#ef4444"
            />
          </GlassCard>
          <GlassCard className="p-6">
            <VitalChart
              data={mockChartData.map(d => ({ ...d, value: d.value + 25 }))}
              title="Blood Pressure Trend (24h)"
              stroke="#3b82f6"
            />
          </GlassCard>
        </div>
      </div>
    </main>
  )
}
