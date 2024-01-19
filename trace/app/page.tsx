import Link from 'next/link'
import ProductCard from './Components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/Users"> Users </Link>
      <ProductCard />
    </main>
  )
}
