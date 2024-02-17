interface ButtonProps {
  handleAction: () => void
  text: string
}

const Button = ({handleAction, text}: ButtonProps): React.ReactElement => {
  return (
    <button
      onClick={handleAction}
      className='px-1 lg:p-1 text-lg mr-2 md:text-xl lg:text-xl text-white font-theme border rounded-xl backdrop-blur hover:scale-105 hover:transition duration-100'
    >
      {text}
    </button>
  )
}

export default Button
