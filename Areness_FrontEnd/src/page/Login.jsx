import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
const Navigate=useNavigate()
const email=useRef()
const password=useRef()


async function handleSubmit(e){
  e.preventDefault()
  try {
    const res=await fetch(`https://areness-assignment-wjeu.onrender.com/api/login`,{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
        email:email.current.value,
        password:password.current.value,
      })
    })
const data=await res.json()

if(data.token){
  localStorage.setItem("token",data.token)
  localStorage.setItem("islogin",true)
  alert(data.message)
  Navigate('/home')

}
  } catch (error) {
    alert(error.message)
    console.log(error.message);
  }
}

  return (
    <Flex
    pt={'4.8rem'}
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      bg={"gray.50"}
      px={{ base: 4, md: 6, lg: 8, xl: 10 }} // Adjusting horizontal padding based on screen size
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={{ base: 5, md: 5, lg: 5, xl: 3 }} // Adjusting vertical padding
        px={{ base: 0, md: 6, lg: 8, xl: 10 }}
        width={{ base: "100%", md: "80%", lg: "60%", xl: "40%" }} // Set width for different screen sizes
      >
        <Stack align={"center"}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            Sign In
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={{ base: 4, md: 5 }}>
          <Stack
           spacing={4}
            as="form"
           onSubmit={handleSubmit}>
            <FormControl id="username">
              <FormLabel>Email</FormLabel>
              <Input type="email" ref={email} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={password}/>
            </FormControl>
            <Stack spacing={6}>
              <Checkbox>Remember me</Checkbox>
              <Button
              type="submit"
                bg={"pink.400"}
                color={"white"}
                _hover={{
                  bg: "pink.500",
                }}
              >
                Log In
              </Button>
              <Text align={"center"}>Or, login with</Text>
              <Flex justify={"center"} flexWrap={"wrap"} gap={4} >
                <Button colorScheme="facebook" bg={'blue'} leftIcon={<FaFacebookF />}>
                  Facebook
                </Button>
                <Button colorScheme="red" leftIcon={<FaGoogle />}>
                  Google
                </Button>
                <Button colorScheme="blackAlpha" leftIcon={<FaTwitter />}>
                  Twitter
                </Button>
              </Flex>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link to='/'  topcolor={"blue.400"}>Create one</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Image
        display={{ base: "none", lg: "flex" }} // Image hidden on mobile/tablet, shown on large screens
        boxSize={{ lg: "400px", xl: "450px" }} // Adjust image size based on screen size
        objectFit="cover"
        src="https://s3-alpha-sig.figma.com/img/aebf/3f1c/e468166d30a3ba064e731222dc4e66ae?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQBq4HHCEnjVt7S5KFC54t8NvG3wpIvxmmdguVZhPXFmVUetFOIdsMhz6JnlrWw2CrYvNVyS7XShLnWeOeqw1ce6bZSwP~plgBAeE1boRp6Mzu2T9Z-axzIQpcAp2cmZzF6cmClkUPaT-xDmrLDcpDDhEzHmHYxYlOrft1gP2Xs3U2fCl5wxCduPixU31JyeYO19e54v881RkogZ9QBIoWua2YlengbhMYUG6PeX~XGhcO7usYD8ETvk2UL6LPm8iC~A~0rWaySztX5mLARI5xV8hf01VSPfMKMbqdDD6ljF0gmN6CT2D~Bg2HeDwLVPr9T~6uV~MNGbDCQ76OToog__"
        alt="Sign in Illustration"
      />
    </Flex>
  );
};

    

