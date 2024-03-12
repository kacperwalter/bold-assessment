import React, { useState } from 'react';
import './index.css';
import Heading from '../../components/heading';
import Text from '../../components/text';
import Wrapper from '../../components/wrapper';
import FormInput from '../../components/formInput';
import contactModel from '../../models/contact.model';

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
    console.log(formData);
  };

  return (
    <section className="contact">
      <Wrapper>
        <div className="content">
          <Heading level={2}>{contactModel.heading}</Heading>
          <Text>{contactModel.description}</Text>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="divider">
            <FormInput type="text" name="firstName" placeholder={contactModel.firstNamePlaceholder} required value={formData.firstName} onChange={handleChange} />
            <FormInput type="text" name="lastName" placeholder={contactModel.lastNamePlaceholder} required value={formData.lastName} onChange={handleChange} />
          </div>

          <FormInput type="tel" name="phoneNumber" placeholder={contactModel.phoneNumberPlaceholder} required style="full" value={formData.phoneNumber} onChange={handleChange} />
          <FormInput type="textarea" name="message" placeholder={contactModel.messagePlaceholder} required style="full" value={formData.message} onChange={handleChange} />
          <button type="submit">{contactModel.submitButtonLabel}</button>
        </form>
      </Wrapper>
    </section>
  );
};

export default Contact;