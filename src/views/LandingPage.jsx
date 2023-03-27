import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useGetProducts } from "hook/api/useApiProduct";
import { matchSorter } from "match-sorter";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
//
function LandingPage() {
  const [searchInput, setSearchInput] = useState("");
  //
  const { data, isLoading } = useGetProducts();
  //
  const products = useMemo(() => {
    const list = data?.data?.[0]?.products ?? [];
    if (!searchInput) return list;
    return matchSorter(list, searchInput, {
      keys: ["ownerID", "shopifyData.title", "_id"],
    });
  }, [data?.data, searchInput]);
  //
  return (
    <Box>
      <Box textAlign="center" color="green" fontWeight="bold" fontSize="22px">
        Hungry Artist Holders Store
      </Box>
      <Flex justify="end">
        <InputGroup w={300}>
          <Input
            bg="#1C1C1C"
            border="none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="search"
          />
          <InputRightElement>
            <SearchIcon color="#ababab" fontSize="22" />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Grid mt={8} templateColumns="repeat(6,minmax(0,1fr))">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <GridItem
                key={i}
                colSpan={{ base: "6", sm: "3", md: "2", lg: "1" }}
              >
                <Box p={3}>
                  <Skeleton height="170px" />
                  <Skeleton mt={2} height="20px" />
                  <Skeleton mt={2} height="20px" />
                </Box>
              </GridItem>
            ))
          : products?.map((item) => (
              <GridItem
                colSpan={{ base: "6", sm: "3", md: "2", lg: "1" }}
                key={item?._id}
              >
                <Link to={`/${item._id}`}>
                  <Box p={3} fontSize="sm">
                    <Image
                      src={item?.shopifyData?.images?.[0]?.src}
                      w="200px"
                      h="200px"
                      objectFit="cover"
                      rounded="lg"
                      alt=""
                    />
                    <Text mt={2}>{item?.shopifyData?.title}</Text>
                    <Text mt={2} color="text-secondary" textAlign="end">
                      {item?.shopifyData?.variants?.[0]?.formatted_price}
                    </Text>
                  </Box>
                </Link>
              </GridItem>
            ))}
      </Grid>
    </Box>
  );
}

export default LandingPage;
