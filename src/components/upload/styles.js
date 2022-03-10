import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #03dac6;
`;

const dragReject = css`
  border-color: #f07178;
`;

export const DropContainer = styled.div`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${({ isDragActive }) => isDragActive && dragActive}
  ${({ isDragReject }) => isDragReject && dragReject}
`;

const messageColors = {
  default: "#999",
  error: "#f07178",
  success: "#03dac6",
};

export const UploadMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${({ type }) => messageColors[type || "default"]};
`;
