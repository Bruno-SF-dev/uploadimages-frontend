import styled, { css } from "styled-components";

const animSec = css`
  transform: scale(0.5);
  opacity: 0;
  animation: anim-link 0.2s 0.2s forwards;

  @keyframes anim-link {
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const animFirst = css`
  transform: scale(0);
  animation: anim-state 0.2s forwards;

  @keyframes anim-state {
    to {
      transform: scale(1);
    }
  }
`;

export const Container = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fafafade;
    padding: 10px 10px;
    background-color: rgba(18, 18, 18, 0.5);
    border-radius: 4px;
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    strong {
      max-width: 225px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #f07178;
        margin-left: 5px;
        cursor: pointer;

        ${animSec}
      }
    }
  }
`;

export const Preview = styled.div`
  min-width: 36px;
  min-height: 36px;
  border-radius: 5px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;

export const FileState = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 0;
  }

  svg[name="link"] {
    ${animSec}
  }

  svg[name="state"] {
    ${animFirst}
  }
`;
