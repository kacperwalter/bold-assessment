import Image from '../image'
import Heading from '../heading';
import Text from '../text';
import Button from '../../components/button';
import './index.css'


const ImageCard = ({image, heading, text, link}) => {
  return (
    <div className="imageCard">
      <Image src={image} alt={heading} className="imageCard__image"/>
      <div className='imageCard__content'>
        <Heading level={3}>{heading}</Heading>
        <Text className="imageCard__text"> {text} </Text>
        <Button text="Read more" type="ghost" href={link} />
      </div>
    </div>
  )
};

export default ImageCard;
