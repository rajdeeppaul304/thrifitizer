import DarkTheme from '../layouts/Dark'
import dynamic from 'next/dynamic'

const Demos = dynamic(
  () => import('../components/Demos.jsx'),
  { ssr: false }
)

export default function Home() {
  return (
    <DarkTheme>
      <Demos />
    </DarkTheme>
  )
}
