import Image from "next/image";
import Link from "next/link";
import myHeadshot from '/images/myHeadshot.png';

function Header() {
  return (
    <header className = "flex items-center justify-between space-x-2 font-bold px-10 py-5">
    <div className="flex items-center space-x-2">
    <Link href ="/">
            <Image
                className="rounded-full"
                src={myHeadshot}
                width={50}
                height={50}
                alt="logo"
                />
    
    </Link>
    <h1>  Timur Niroomand  </h1>
    </div>
    <div>
  
        <div className="flex items-center space-x-1 px-10">
        <Link href="/">
            <p>//github</p>
        </Link>
        <Link href="/">
            <p>//email</p>
        </Link>
        <Link href="/">
            <p>//linkedin</p>
        </Link>
        <p>//DM/LM</p>
        </div>
    </div>
    </header>
  )
}

export default Header