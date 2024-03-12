import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';

const Contact = () => {

  return (
    <section className="contact">
      <div className="container">
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
      </div>
    </section>
  )
};

export default Contact;
