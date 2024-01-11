import Image from "next/image"
import Link from "next/link"

type LogoProps = {
    href : string,
    title : string
}


const Logo = ({href,title}:LogoProps) => {
  return (
    <Link href="/">
        <div className="flex items-center gap-2">
            <Image
            src={href}
            alt={title}
            height={50}
            width={50}
            />
            <h1 className="font-bold text-lg hidden md:block">{title}</h1>
        </div>
    </Link>
  )
}

export default Logo