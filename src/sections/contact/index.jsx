import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';
import Wrapper from '../../components/wrapper';
import FormInput from '../../components/formInput';

const Contact = () => {

  return (
    <section className="contact">
      <Wrapper>
        <div className="content">
          <Heading level={2}>
            Contact
          </Heading>
          <Text>
            Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours
          </Text>
        </div>

        <form className="form">
          <div className="divider">
            <FormInput type="text" name="name" placeholder="First name" required />
            <FormInput type="email" name="email" placeholder="Last name" required />
          </div>

          <FormInput type="text" name="subject" placeholder="Phone Number" required />
          <FormInput type="textarea" name="message" placeholder="What Service are you interested in?" required />
          <button type="submit">Send</button>
        </form>
      </Wrapper>
    </section>
  )
};

export default Contact;
