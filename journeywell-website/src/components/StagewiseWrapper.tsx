'use client'

import { useEffect } from 'react'

export function StagewiseWrapper() {
  useEffect(() => {
    // Only initialize in development mode and browser environment
    if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
      return
    }

    // Dynamically import and initialize stagewise toolbar
    const initializeStagewise = async () => {
      try {
        const { initToolbar } = await import('@stagewise/toolbar')
        
        // Initialize the toolbar with basic configuration
        initToolbar({
          plugins: [] // Start with no plugins to avoid compatibility issues
        })
        
        console.log('Stagewise toolbar initialized successfully')
      } catch (error) {
        console.warn('Failed to initialize Stagewise toolbar:', error)
      }
    }

    initializeStagewise()
  }, [])

  return null
}

// Keeping the original implementation commented out for future reference
/*
import dynamic from 'next/dynamic'
import { ReactPlugin } from '@stagewise-plugins/react'

// Dynamically import StagewiseToolbar with no SSR
const StagewiseToolbar = dynamic(
  () => import('@stagewise/toolbar-next').then(mod => mod.StagewiseToolbar),
  { 
    ssr: false,
    loading: () => null
  }
)

interface ErrorBoundaryState {
  hasError: boolean
}

class StagewiseErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.warn('StagewiseToolbar error (non-critical):', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return null // Silently fail
    }

    return this.props.children
  }
}

export function StagewiseWrapper() {
  // Only render in development and in browser environment
  if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
    return null
  }

  return (
    <StagewiseErrorBoundary>
      <StagewiseToolbar 
        config={{
          plugins: [ReactPlugin]
        }}
      />
    </StagewiseErrorBoundary>
  )
}
*/ 