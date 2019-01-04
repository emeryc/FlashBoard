import * as React from "react";
import styled from "styled-components";
import useComponentSize from "@rehooks/component-size";

const Button = styled.button`
  background: none;
  border: none;
  font-size: ${props => props.height / 2}px;
  line-height: ${props => props.height - 1}px;
  height: 100%;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  width: 100%;
`;
const Span = styled.span`
  display: flex;
  align-item: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 100%;
`;

export default React.memo(function(props) {
  const spanRef = React.useRef(null);
  function submit() {
    props.onClick(props.char);
  }
  const { height } = useComponentSize(spanRef);

  return (
    <Span ref={spanRef}>
      <Button height={height} onClick={submit}>
        {props.char}
      </Button>
    </Span>
  );
});
