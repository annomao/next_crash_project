import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Next JS Crush Project</h1>
      <ul>
        <li>
          <Link href='/'>HOME</Link>
        </li>
        <li>
          <Link href='/about'>ABOUT</Link>
        </li>
        <li>
          <Link href='/about/team'>TEAM</Link>
        </li>
      </ul>

    </div>
  )
}

export default HomePage
