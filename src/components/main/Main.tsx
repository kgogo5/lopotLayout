import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { DefaultButton } from "../../styled/common";

import Rectangle from "../../images/Rectangle.png";

export const Title = styled(Box)`
  gap: 12px 25px;
  @media screen and (max-width: 980px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ContentWrap = styled.div`
  position: relative;
  padding: 50px 0;
  /* padding-left: 35.035%; */
  display: flex;
  gap: 40px;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }

  & .imageArea {
    max-width: 380px;
    width: 100%;
    height: auto;

    @media screen and (max-width: 980px) {
      margin: 0 auto;
      width: 100%;
    }
    & img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      overflow: hidden;
    }
  }

  & .textArea {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    flex-wrap: wrap;
    height: 100%;

    @media screen and (max-width: 980px) {
      margin: 0 auto;
      width: 100%;
      & button {
        width: 100%;
      }
    }
  }
`;

export const RactangleBox = styled(Box)`
  width: 100%;
  border-radius: 10px;
  background-color: #1f1f1f;
`;

const Main = () => {
  return (
    <section>
      <Title display="flex">
        <Box>
          <Typography fontSize="30px" lineHeight="36px" component="h1">
            MINTING STAGE
          </Typography>
        </Box>
        <Box>
          <Typography component="span">
            WHITELIST{" "}
            <Typography component="span" color="#26F1E7">
              COMMON COIL
            </Typography>{" "}
            MINTING
          </Typography>
        </Box>
      </Title>
      <ContentWrap>
        <Box className="imageArea">
          <img src={Rectangle} alt="" />
        </Box>
        <Box className="textArea">
          <RactangleBox>
            <Box
              p="23px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontSize="20px" lineHeight="26px">
                My Wallet (e923402385...)
              </Typography>
              <Typography fontSize="30px" lineHeight="36px">
                1,000 SOL
              </Typography>
            </Box>
          </RactangleBox>
          <RactangleBox my="40px">
            <Box p="23px" display="flex">
              <Box width="50%" pr="40px">
                <Typography>Remaining</Typography>
                <Box mt="32px">
                  <Typography fontSize="30px" lineHeight="36px">
                    <Typography
                      fontSize="30px"
                      lineHeight="36px"
                      component="span"
                      color="#ed5829"
                    >
                      300
                    </Typography>{" "}
                    /{" "}
                    <Typography
                      component="span"
                      fontSize="20px"
                      lineHeight="26px"
                    >
                      1500
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box width="50%" pl="40px" borderLeft="1px solid #5F5F5F">
                <Typography>Price</Typography>
                <Box mt="36px">
                  <Typography fontSize="30px" lineHeight="36px" color="#ed5829">
                    500 SOL
                  </Typography>
                </Box>
              </Box>
            </Box>
          </RactangleBox>
          <Box width="100%">
            <DefaultButton>Connect wallet</DefaultButton>
          </Box>
        </Box>
      </ContentWrap>
    </section>
  );
};

export default Main;
