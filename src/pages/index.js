import DarkTheme from '../layouts/Dark'
import dynamic from 'next/dynamic'
import Homepage4 from './/home.jsx'

const Demos = dynamic(
  () => import('../components/Demos.jsx'),
  { ssr: false }
)

export default function Home() {
  return (
    <DarkTheme>
      <Homepage4 />
    </DarkTheme>
  )
}
