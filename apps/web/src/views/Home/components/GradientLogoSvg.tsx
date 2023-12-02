import Image, { ImageProps } from 'next/image'
import ice from '../../../../public/images/icecreamGradient.png'

const GradientLogo: React.FC<Omit<ImageProps, 'src' | 'alt'>> = (props) => {
  return <Image src={ice} alt="" {...props} />
}

export default GradientLogo
