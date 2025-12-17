import React, { useRef } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  Image,
  Select,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
const Navigate=useNavigate()
const name=useRef()
const email=useRef()
const password=useRef()
const age=useRef()
const gender=useRef()
const number=useRef()

async function handleSubmit(e){
  e.preventDefault()
try {
  const res=await fetch(`https://areness-assignment-wjeu.onrender.com/api/register`,{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify({
      name:name.current.value,
      email:email.current.value,
      password:password.current.value,
      age:age.current.value,
      gender:gender.current.value,
      number:number.current.value
    })
  })

  const data=await res.json()

if(res.status===201){
  localStorage.setItem("userEmail",JSON.stringify(email.current.value))
  alert(data.message)
  Navigate("/login")
}
} catch (error) {
  console.log(error.message)
}
}


  return (
    <Flex
    pt={'6.8rem'}
    minH="100vh"
    align="center"
    justify="center"
    px={{ base: 4, md: 8 }}
  >
    <Box
      bg="white"
      boxShadow="lg"
      borderRadius="lg"
      overflow="hidden"
      width={{ base: "100%", md: "100%", lg: "100%" }}
      maxW="1200px"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
     
    >
      {/* Left Section - Image */}
      <Box flex="1" bg="white" p={6} display={{ base: "none", lg: "flex" }}>
        <Image
          src="https://s3-alpha-sig.figma.com/img/6d08/add4/e1ff0f0155d84c990839d2578e5bc3bb?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=imcP9IZBqz57yNU2yRXzoyoWH6XIc28kW9IchyQYolwQbFFRhS9Hv9kBjwabY2k3tSRhGmTEmYBdXW55RpwEJ4l2WtWkIccJNHh7t-kenFXUzCYMU6LCwjnZk9hgAsHyJvbOefBmIBIH4lq4NF1pBiEM475Tudo6UwBIcD-BHGIo-~1l-evx01ak10Ty627jrPOzxhHXAbxjD0p~U~vqzDZBZa1-yxq25hu2MpYWeSQ8y~uSgSSl1M7BE8q5AA9VKb6YKyk-nOG1k2unHcrB4kG1eQ8~Ogu2Qg2rifAFPBtWdjegS0ibmAKYj2eAfPO7TdFRezlJkOPznJ03ftYYOg__"
          alt="Sign Up Illustration"
          objectFit="cover"
          boxSize="100%"
        />
      </Box>

      {/* Right Section - Form */}
      {/* <form></form> */}
      <VStack
          as="form"
           onSubmit={handleSubmit}
        flex="1"
        p={8}
        spacing={4}
        align="flex-start"
        justify="center"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Sign Up
        </Text>

        {/* Username */}
        <FormControl isRequired>
          <Input type="text" placeholder="Enter Username" ref={name} />
        </FormControl>

        {/* Email */}
        <FormControl isRequired>
          <Input type="email" placeholder="Enter Email" ref={email} />
        </FormControl>

        {/* Password */}
        <FormControl isRequired>
          <Input type="password" placeholder="Enter Password" ref={password} />
        </FormControl>

        {/* number */}
        <FormControl isRequired>
          <Input type="number" placeholder="Enter Mobile Number" ref={number} />
        </FormControl>

        {/* age */}
        <FormControl isRequired>
          <Input type="number" placeholder="Enter your age" ref={age} />
        </FormControl>

        <FormControl isRequired>
            <FormLabel>Gender</FormLabel>
            <Select placeholder="Select Gender" ref={gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
        {/* Terms and Conditions */}
        <Checkbox>
          I agree to all terms
        </Checkbox>

        {/* Register Button */}
        <Button colorScheme="pink" width="full" type="submit">
          Register
        </Button>

        <Text>
          Already have an account?{" "}
          <Link to='/login'>
          <Button color={'blue.400'}>Login</Button>
          </Link>

        </Text>
      </VStack>
    </Box>
  </Flex>
  )
}
