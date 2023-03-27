import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ImageSlider from "components/shared/ImageSlider";
import { useGetProductDetails } from "hook/api/useApiProduct";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "store/slices/cartSlice";

function ProductPage() {
  const { productId } = useParams();
  const { data, isLoading } = useGetProductDetails(productId);
  //
  const dispatch = useDispatch();
  //
  return (
    <>
      {isLoading ? (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      ) : (
        <Box>
          <Grid mt={8} templateColumns="repeat(3,minmax(0,1fr))" columnGap={10}>
            <GridItem colSpan={{ base: 3, lg: 1 }}>
              <ImageSlider
                images={data?.data?.shopifyData?.images?.map((img) => img.src)}
              />
            </GridItem>
            <GridItem colSpan={{ base: 3, lg: 2 }} mt={{ base: 8, lg: 0 }}>
              <Text fontWeight="bold" fontSize="xxx-large">
                {data?.data?.shopifyData?.title}
              </Text>
              <Text fontSize="xx-large" mt={6}>
                Description
              </Text>
              <Text color="text-secondary" fontSize="large" mt={6}>
                {data?.data?.shopifyData?.title}
              </Text>
            </GridItem>
          </Grid>
          <Box mt={10}>
            {data?.data?.shopifyData?.variants?.map((variant) => (
              <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ lg: "center" }}
                key={variant?.id}
                justify="space-between"
                p={5}
                gap={{ base: 3, lg: 0 }}
              >
                <Box>title: {variant?.title}</Box>
                <Box>price: {variant?.formatted_price}</Box>
                <Box>quantity: {variant?.inventory_quantity}</Box>
                <Box>external ID: {variant?.id}</Box>
                <Box>DBD: {variant?.grams}</Box>
                <Box>weight: {variant?.weight}</Box>
                <Button onClick={() => dispatch(addToCart())}>request</Button>
              </Flex>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
}

export default ProductPage;
