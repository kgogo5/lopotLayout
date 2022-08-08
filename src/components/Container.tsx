import styled from "@emotion/styled";
import GlobalStyle from "../styled/common";
import Header from "./Header";

interface IContainer {
  children?: JSX.Element | string;
}

const Wrap = styled.div`
  padding: 0 9.86%;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 980px) {
    padding: 0 12px;
    height: auto;
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin: 134px 0;
  max-width: 1156px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
`;

const Container = ({ children }: IContainer) => {
  return (
    <Wrap>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Content>{children}</Content>
      </Wrapper>
    </Wrap>
  );
};

export default Container;
