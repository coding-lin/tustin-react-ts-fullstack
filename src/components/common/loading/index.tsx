import React from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  body,
  html {
  width: 100%;
  height: 100%;
  display: flex;
}

@property --per {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 10%;
}

div {
  position: relative;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: rotate 11s infinite ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: conic-gradient(
      transparent,
      transparent var(--per),
      #fa7 var(--per),
      #fa7
    );
    mask: radial-gradient(transparent, transparent 47.5px, #000 48px, #000);
    animation: change 3s infinite cubic-bezier(0.57, 0.29, 0.49, 0.76);
  }
}

@keyframes change {
  50% {
    transform: rotate(270deg);
    --per: 98%;
  }
  100% {
    transform: rotate(720deg);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
`

function Loading() {
  return (
    <LoadingWrapper>
      <div></div>
    </LoadingWrapper>
  )
}
 
export default React.memo(Loading)