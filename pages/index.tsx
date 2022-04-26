import type { NextPage } from "next";
import styled from "styled-components";
import Brush from "blocks/brush";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <h1>leadership</h1>
      </main>
    </div>
  );
};

const MyButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default Home;
