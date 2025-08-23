import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

// Import the globe component dynamically to avoid SSR issues with Three.js
const GlobeComponent = dynamic(() => import('../components/GlobeComponent'), {
  ssr: false,
  loading: () => (
    <div className="globe-container flex items-center justify-center bg-gradient-dark">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <span className="text-primary-foreground text-2xl">🌍</span>
        </div>
        <p className="text-muted-foreground">Loading interactive globe...</p>
      </div>
    </div>
  )
})

const BranchesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative z-10">
        <Layout>
          <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-background/80 to-transparent">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Interactive
                  <span className="bg-gradient-secondary bg-clip-text text-transparent"> Globe</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Explore our global reach and impact. This interactive 3D globe will expand to show our workshops and partnerships worldwide.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>

      {/* Globe Component - fills the viewport */}
      {/* 
        To customize the globe:
        - Edit components/GlobeComponent.js
        - Modify the sphere color, lighting, or camera settings
        - Adjust the container sizing by changing the globe-container class in globals.css
        - The globe automatically resizes to fill the viewport (100vw x 100vh)
      */}
      <div className="fixed inset-0">
        <GlobeComponent />
      </div>
    </div>
  )
}

export default BranchesPage