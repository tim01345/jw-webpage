import './globals.css'
import { StagewiseWrapper } from '@/components/StagewiseWrapper'

export const metadata = {
  title: 'JourneyWell | Creative Content & Digital Marketing Studio',
  description: 'Professional podcast production, video content creation, brand development, and studio rentals in Baton Rouge, Louisiana.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <StagewiseWrapper />
      </body>
    </html>
  )
}