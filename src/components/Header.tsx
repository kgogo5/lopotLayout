import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { OutlineButton } from "../styled/common";

const HeaderWrap = styled.header`
  position: absolute;
  right: 0;
  top: -90px;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    left: 10px;
    right: 10px;
    & button {
      & span {
        font-size: 0.8em;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <OutlineButton>
        <Typography
          component="span"
          fontSize="20px"
          lineHeight="26px"
          fontWeight="300"
        >
          Connect wallet
        </Typography>
      </OutlineButton>
    </HeaderWrap>
  );
};

export default Header;
