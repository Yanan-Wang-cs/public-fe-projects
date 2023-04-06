import Banner from './banner'
import News from './news'
export default function HomePage() {
  return (
    <div className='homepage bg-homepage-primary'>
      <Banner />
      <News />
    </div>
  )
}