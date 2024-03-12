import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';
import Wrapper from '../../components/wrapper';

const Contact = () => {

  return (
    <section className="contact">
      <Wrapper>
        <div className="content">
          <Heading level={2}>
            Contact
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla convallis libero nec nisl gravida, eget euismod quam 
            aliquet.
          </Text>
        </div>
        <div className="form">
          some form
        </div>
      </Wrapper>
    </section>
  )
};

export default Contact;
