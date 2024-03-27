import React, { useContext, useState, useEffect } from 'react';
import { Flex, Box, Image, Button, Text } from '@chakra-ui/react';
import Email from './Email';
import Louage from './louaj.png';
import Sign_up_text from './Sign_up_text';
import Button_Signup from './button_signup';
import { SignupSubmitContext } from './Signup_SubmitContext';
import Tel from './Tel';
import { Input } from '@chakra-ui/react';
import { VerificationContext } from './Verfication';
import { PhoneContext } from './Validationnumber';
import { createUser } from '../../api/user_api';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

function Sign_Up() {
  const { username, setUsername, password, setPassword, signupResult } = useContext(SignupSubmitContext);
  const { email, isValid } = useContext(VerificationContext);
  const { phoneNumber } = useContext(PhoneContext);
  const navigate = useNavigate() ; 
  
  const emailSchema = z.string().email();
  const phoneSchema = z.string().regex(/^\+?[0-9]{6,14}$/);

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: ''
  });

  useEffect(() => {
    // Reset errors when the phone number changes
    setErrors({
      username: '',
      password: '',
      email: '',
      phoneNumber: ''
    });
  }, [phoneNumber]); // Reset errors when phoneNumber changes

  const handleSubmit = async () => {
    const newErrors = { username: '', password: '', email: '', phoneNumber: '' };

    if (!username) {
      newErrors.username = 'Username is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (!emailSchema.safeParse(email).success) {
      newErrors.email = 'Email is required';
    } 

    if (!phoneSchema.safeParse(phoneNumber).success) {
      newErrors.phoneNumber = 'Phone number is required';
    } 

    if (Object.values(newErrors).some(err => err !== '')) {
      setErrors(newErrors);
      return;
    }

    try { 
      const obj = { username, password, email, phoneNumber };
      console.log("Submitting obj:", obj);
      const response = await createUser(obj);
      console.log("User created successfully:", response); 
      navigate('/')
    } catch (error) {
      console.log("Error occurred while creating user:", error);
      setErrors({ ...newErrors, submit: 'An error occurred while creating the user' });
    }
  };

  return (
    <Flex color='white' h='100vh'>
      <Box flex='1' bg='RGBA(236,189,76,0.7)' roundedBottomRight={20} boxShadow={20}>
        <Sign_up_text />
        <Flex flexDirection="column" alignItems="center">
          <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <Text color="red">{errors.username}</Text>

          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <Text color="red">{errors.password}</Text>

          <Email />
          <Text color="red">{errors.email}</Text>

          <Tel />
          <Text color="red">{errors.phoneNumber}</Text>

          {/* Error message for the form submission */}
          {errors.submit && (
            <Flex justify="center" mt='2'>
              <Text color="red">{errors.submit}</Text>
            </Flex>
          )}

          {/* Button wrapped in Flex container for centering */}
          <Flex justify="center" mt='5%'>
            <Button color='#052c51' onClick={handleSubmit}>Sign_Up</Button>
          </Flex>
        </Flex>
      </Box>
      <Box flex='1' bg='#ecbd4c' display='flex' alignItems='center' justifyContent='center'>
        <Image src={Louage} alt='Louage bou blassa' maxH='100%' />
      </Box>
    </Flex>
  );
}

export default Sign_Up;
