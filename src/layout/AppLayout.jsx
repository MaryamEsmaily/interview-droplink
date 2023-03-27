import { Box, Button, Circle, Container, Flex, Image } from "@chakra-ui/react";
import droplinked from "assets/images/droplinked.png";
import ShopIcon from "components/icon/ShopIcon";

import { memo } from "react";

const AppLayout = (props) => {
  return (
    <Container maxW="full" px="20" mt={5}>
      <Flex justify="space-between">
        <Image src={droplinked} alt="logo-image" />
        <Button variant="unstyled">
          <Circle bg="layout" size={10}>
            <Box
              sx={{
                position: "absolute",
                right: "0px",
                top: "-2px",
                color: "#fff",
                padding: "10px",
                borderRadius: "full",
                fontWeight: "bold",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "8px",
              }}
              bgColor="green"
            >
              2
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
