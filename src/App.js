import * as React from "react";
import Letter from "./Letter";
import styled from "styled-components";

const Container = styled.div`
  max-width: 93.75%;
  min-width: 93.75%;
  max-height: 93.75vh;
  min-height: 93.75vh;

  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 30pt auto;

  grid-template-areas:
    "input"
    "characters";
`;

const Input = styled.div`
  grid-area: input;
  display: flex;
  flex-align: center;
  justify-content: center;
  font-size: 25pt;
`;
const Characters = styled.div`
  width: 100%;
  height: 100%;
  grid-area: characters;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  align-items: stretch;
  align-content: stretch;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
`;

export default React.memo(function(props) {
  const [value, setValue] = React.useState("");
  function update(char) {
    setValue(value + char);
  }

  return (
    <Container>
      <Input>{value}</Input>
      <Characters>
        {[
          ["1", "e", "n", "l", "f", "v"],
          ["2", "t", "s", "c", "g", "k"],
          ["3", "a", "h", "u", "y", "x"],
          ["4", "o", "r", "m", "p", "j"],
          ["5", "i", "d", "w", "b", "q"],
          ["6", "7", "8", "9", "0", "z"]
        ].map(row => (
          <Row key={row[0]}>
            {row.map(c => (
              <Letter key={c} onClick={update} char={c} />
            ))}
          </Row>
        ))}
      </Characters>
    </Container>
  );
});
