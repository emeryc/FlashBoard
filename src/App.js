import * as React from "react";
import Letter from "./Letter";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  min-width: 100%;
  max-height: 93.75vh;
  min-height: 93.75vh;

  display: grid;
  align-items: center;
  grid: 50pt 1fr 1fr 1fr / 6fr 1fr;
  grid-template-areas:
    "input input"
    "characters space"
    "characters clear"
    "characters delete";
`;

const Input = styled.div`
  grid-area: input;
  display: flex;
  flex-align: center;
  justify-content: center;
  font-size: 45pt;
`;
const Characters = styled.div`
  display: grid;
  grid-area: characters
  width: 100%;
  height: 100%;
  grid: auto / repeat(6, 1fr);
`;

const Delete = styled.div`
  grid-area: delete;
  width: 100%;
  font-size: 45pt;
`;

const Clear = styled.div`
  grid-area: clear;
  width: 100%;
  font-size: 45pt;
`;

const Space = styled.div`
  grid-area: space;
  font-size: 45pt;
  text-align: center;
  width: 100%;
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
          //          ["1", "e", "n", "l", "f", "v"],
          //          ["2", "t", "s", "c", "g", "k"],
          //          ["3", "a", "h", "u", "y", "x"],
          //          ["4", "o", "r", "m", "p", "j"],
          //          ["5", "i", "d", "w", "b", "q"],
          //          ["6", "7", "8", "9", "0", "z"]
          ["a", "b", "c", "d", "e", "1"],
          ["f", "g", "h", "i", "j", "2"],
          ["k", "l", "m", "n", "o", "3"],
          ["p", "q", "r", "s", "t", "4"],
          ["u", "v", "w", "x", "y", "5"],
          ["z", "6", "7", "8", "9", "0"]
        ].map(row => (
          <React.Fragment>
            {row.map(c => (
              <Letter key={c} onClick={update} char={c} />
            ))}
          </React.Fragment>
        ))}
      </Characters>
      <Space onClick={() => setValue(value + " ")}>Space</Space>
      <Clear
        onClick={() => {
          setValue("");
        }}
      >
        Clear
      </Clear>
      <Delete
        onClick={() => {
          setValue(value.slice(0, value.length - 1));
        }}
      >
        Delete
      </Delete>
    </Container>
  );
});
