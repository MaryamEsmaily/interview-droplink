import { Box, Button, Circle, Container, Flex, Image } from "@chakra-ui/react";
import droplinked from "assets/images/droplinked.png";
import ShopIcon from "components/icon/ShopIcon";
import { memo } from "react";
import { useSelector } from "react-redux";

const AppLayout = (props) => {
  //
  const count = useSelector((state) => state.cart.count);
  //
  return (
    <Container maxW="full" px="20" mt={5}>
      <Flex justify="space-between">
        <Image src={droplinked} alt="logo-image" />
        <Button variant="unstyled">
          <Circle bg="layout" size={10}>
            <Box
              sx={{
                position: "absolute",
                right: "-2px",
                top: "-6px",
                color: "#fff",
                padding: "10px",
                borderRadius: "full",
                fontWeight: "bold",
                width: "14px",
                height: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
              }}
              bgColor="green"
            >
              {count ?? "0"}
            </Box>
            <ShopIcon boxSize={8} />
          </Circle>
        </Button>
      </Flex>
      <Box mt={5}>{props.children}</Box>
    </Container>
  );
};

export default memo(AppLayout);
