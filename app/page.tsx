import { GlassCard } from '@/components/ui/GlassCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-medical-50 to-medical-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif text-medical-900 mb-4">
            MONITOR 2.0
          </h1>
          <p className="text-xl text-warm-600">
            Clinical Intelligence Platform
          </p>
          <p className="text-lg text-warm-500 mt-2">
            Cascade inference engine for physiological state analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard 
            title="Real-Time Monitoring"
            description="Continuous physiological data analysis with advanced cascade inference"
            className="hover:scale-105 transition-transform duration-300"
          />
          <GlassCard 
            title="Clinical Intelligence"
            description="AI-powered insights for better patient care decisions"
            className="hover:scale-105 transition-transform duration-300"
          />
          <GlassCard 
            title="Predictive Analytics"
            description="Early warning systems for critical patient deterioration"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-warm-500">
            🚧 Under active development
          </p>
        </div>
      </div>
    </main>
  )
}
