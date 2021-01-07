import styled from 'styled-components';
import { BASE_COLOR } from 'constants/config';
import { mediaMax } from '~/utils';

const SPINNER_COLOR = '#f0f0f0';

export const LoaderWrapper = styled.div`
  position: relative;
  min-height: ${p => p.heightSize || 'auto'};
  background: ${p => p.backgroundColor};
  ${p =>
    p.heightSize
      ? `
    width: 100%;
    display: flex;
    justify-content: center;
  `
      : `
    display: inline-block;
  `}
  ${mediaMax.xsMax`
    min-height: ${p => p.xsHeightSize || p.heightSize || 'auto'};
  `}
`;

export const FadeContent = styled.div`
  width: 100%;
  transition: all 0.6s ease 0.15s;
  opacity: ${p => (p.show ? 1 : 0)};
`;

const smSize = `
  width: 1.5rem;
  height: 1.5rem;
  border-width: 3px;
  &:after {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Loader = styled.div`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin: auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 5px solid ${SPINNER_COLOR};
  border-right: 5px solid ${SPINNER_COLOR};
  border-bottom: 5px solid ${SPINNER_COLOR};
  border-left: 5px solid ${BASE_COLOR};
  transform: translateZ(0);
  animation: spin 1.1s infinite linear;

  &:after {
    content: '';
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: block;
  }

  ${mediaMax.xsMax`
    ${smSize}
  `}

  ${p => (p.size === 'sm' ? smSize : null)}

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
