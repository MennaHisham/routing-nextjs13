import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Link href='/about'>About</Link>
      <Link href='/blog/123'>Blog Post</Link>
    </div>
  )

}
