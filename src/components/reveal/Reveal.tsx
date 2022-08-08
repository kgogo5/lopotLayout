import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Title } from "../main/Main";

const LopotRevealWrap = styled.div`
  padding-top: 51.557%;
  width: 51.73%;
  height: 0;
  overflow: hidden;
  border: 1px solid red;
`;

const LopotRevealItem = styled.div`
  width: 44.81%;
  border: 1px solid red;
`;

const Reveal = () => {
  return (
    <section>
      <Title display="flex">
        <Box>
          <Typography fontSize="30px" lineHeight="36px" component="h1">
            LOPOT REVEAL
          </Typography>
        </Box>
      </Title>
      <Box mt="40px" display="flex" width="100%" gap="0 3.46%">
        <LopotRevealWrap>a</LopotRevealWrap>
        <LopotRevealItem>b</LopotRevealItem>
      </Box>
    </section>
  );
};

export default Reveal;
