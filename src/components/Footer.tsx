interface FooterProps {
  copyright: string
}

const Footer = ({copyright}: FooterProps): React.ReactElement => {
  return (
    <div>
      <div>
        <a
          className='ml-2 text-white text-xs font-copyright drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-blue-400'
          data-testid='footer'
          href='https://github.com/dimitrispax/echoes-of-greece'
          target='_blank'
          rel='noopener noreferrer'
        >
          {copyright}
        </a>
      </div>
    </div>
  )
}

export default Footer
