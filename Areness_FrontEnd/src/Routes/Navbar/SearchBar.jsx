import { InputGroup, Input, InputRightElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <InputGroup size={["sm","md","lg"]} width="30%" m={'auto'}  minWidth={"450px"}>
      <Input
        placeholder="Search your task here..."
        borderRadius="full"
        boxShadow="sm"
        _hover={{ boxShadow: "md" }}
        _focus={{ boxShadow: "lg", borderColor: "pink.400" }}
      />
      <InputRightElement>
        <IconButton
          icon={<SearchIcon />}
          aria-label="Search"
          colorScheme="pink"
          borderRadius="full"
          size={["sm","md","lg"]}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
