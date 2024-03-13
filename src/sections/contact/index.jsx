import { useState } from 'react';
import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';
import Wrapper from '../../components/wrapper';
import FormInput from '../../components/formInput';
import contactModel from '../../models/contact.model';
import Button from '../../components/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // For demonstration, log the form data to the console
  };

  return (
    <section className="contact">
      <Wrapper>
        <div className="content">
          <Heading level={2}>{contactModel.heading}</Heading>
          <Text>{contactModel.description}</Text>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <span className="divider">
            <FormInput 
              type="text" 
              name="firstName" 
              placeholder={contactModel.firstNamePlaceholder} 
              required 
              value={formData.firstName} 
              onChange={handleChange} 
            />
            <FormInput 
              type="text" 
              name="lastName" 
              placeholder={contactModel.lastNamePlaceholder} 
              required 
              value={formData.lastName} 
              onChange={handleChange} 
            />
          </span>

          <FormInput 
            type="tel" 
            name="phoneNumber" 
            placeholder={contactModel.phoneNumberPlaceholder} 
            required 
            style="full" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
          />
          <FormInput 
            type="textarea" 
            name="message" 
            placeholder={contactModel.messagePlaceholder} 
            required 
            style="full" 
            value={formData.message} 
            onChange={handleChange} 
          />

          <Button text={contactModel.submitButtonLabel} type="primary" />
        </form>
      </Wrapper>
    </section>
  );
};

export default Contact;