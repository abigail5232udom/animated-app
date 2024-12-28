import { FaDiscord, FaTwitter, FaGithub, FaTwitch,} from "react-icons/fa"


const link = [
  {href: 'https://discord.com',icons: <FaDiscord />},
  {href: 'https://twitter.com',icons: <FaTwitter />},
  {href: 'https://github.com',icons: <FaGithub />},
  {href: 'https://twitch.com',icons: <FaTwitch />}, 
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='text-center text-sm md:text-left'>
          &copy; Nova 2024. All rights reserved
        </p>

        <div className='flex justify-center gap-4 md:justify-start'>
          {link.map(( link) => (
            <a key={link} href={link.href} target="_blank" rel='noopener noreferrer' className="text-black transition-colors duration-500 ease-in-out hover:text-white">
              {link.icons}
            </a>
          ))}
        </div>
        <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
          privacy policy
        </a>
      </div>
    </footer>
  )
}

export default Footer