import Image from "next/image";
import Link from "next/link";
import myHeadshot from '/images/myHeadshot.png';
import myLinkedIn from '/images/linkedinlogo.png';
import myGithub from '/images/GitHub-Mark.png';

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
        <Link href="https://www.github.com/timn00/">
        <Image  
                className="rounded-full"
                src={myGithub}
                width={45}
                height={45}
                alt="github.com/timn00"
                />
        </Link>
      
        <Link href="https://linkedin.com/in/timur-niroomand/">
        <Image  
                className="rounded-full"
                src={myLinkedIn}
                width={60}
                height={60}
                alt="https://www.linkedin.com/in/timur-niroomand"
                />
        </Link>
       
        </div>
    </div>
    </header>
  )
}

export default Header