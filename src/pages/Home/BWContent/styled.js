import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  cursor: pointer;
  border-radius: 50%;
  transition: ${DEFAULT_TRANSITION};
  &:hover {
    box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  margin: -1rem;
  padding-top: 18px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
