import { useRouter } from 'next/router'

type WrappingLinkProps = {
  children: React.ReactNode,
  to: string
}

const WrappingLink = ({ children, to }: WrappingLinkProps) => {
  const router = useRouter()
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    router.push(to)
  }
  return (
    <a href="#" onClick={handleClick}>
      { children }
    </a>
  )
}

export default WrappingLink