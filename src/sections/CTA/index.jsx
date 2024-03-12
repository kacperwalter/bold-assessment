import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';
import Wrapper from '../../components/wrapper';
import focusImg from '/focus.png';
import iconsImg from '/icons.png';
import ctaModel from '../../models/CTA.model';

const CTA = () => {
  return (
    <div className="cta">
      <Wrapper>
        <div className="content">
          <Heading level={2} color="white">
            {ctaModel.heading}
          </Heading>
          <Text color="white">
            {ctaModel.text}
          </Text>
          <img src={iconsImg} alt="Icons" />
        </div>
        <div className="image">
          <img src={focusImg} alt="Focus" />
        </div>
      </Wrapper>
    </div>
  )
};

export default CTA;
