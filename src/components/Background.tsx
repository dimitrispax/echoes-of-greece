import background from '../assets/background.jpg'

const Background = () => {
  return (
    <img
      className='object-cover h-full w-full brightness-75'
      src={background}
    />
  )
}

export default Background
