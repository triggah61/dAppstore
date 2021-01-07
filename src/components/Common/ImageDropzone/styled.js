import styled from 'styled-components';
import { DEFAULT_TRANSITION } from 'constants/config';

export const Container = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;
export const DropzoneContainer = styled.div`
  display: flex;
  justify-content: center;
  outline: none;
  cursor: pointer;
  border: 2px dashed rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
  transition: ${DEFAULT_TRANSITION};
  position: relative;
  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }
  ${p =>
    !p.isMultiple
      ? `
    &:after {
      content: 'Max file (1)';
      font-size: 0.75rem;
      position: absolute
      bottom: 0.3125rem;
      right: 0.5rem;
      color: rgba(255, 255, 255, 0.2);
    }
  `
      : ''}
`;
export const ThumbNail = styled.div`
  position: relative;
  margin: 0.25rem;
  &:hover {
    > span {
      opacity: 1;
    }
  }
`;

const setWidth = p => {
  if (p.isMultiple) {
    return `${p.thumbSize === 'sm' ? 4.375 : 6.875}rem`;
  }
  return undefined;
};
export const ThumbNailInner = styled.div`
  height: ${p => (p.thumbSize === 'sm' ? 4.375 : 6.875)}rem;
  width: ${p => setWidth(p) || '100%'};
  overflow: hidden;
  border-radius: ${p => (p.isMultiple ? '50%' : 0)};
  border: 1px solid ${p => (p.hasError ? 'red' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: ${p => (p.isMultiple ? '100%' : 'auto')};
    width: ${p => (p.isMultiple ? 'auto' : '100%')};
    &:last-child {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: ${p => (p.thumbSize === 'sm' ? 2 : 3.375)}rem;
      height: auto;
    }
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.label`
  &&& {
    font-size: 1.125rem;
    font-family: PFSquareSansPro-Light, sans-serif;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 1rem;
    > * {
      color: #31bbff;
    }
  }
`;
const setPosition = p => {
  if (p.isMultiple) {
    return p.thumbSize === 'sm' ? '30%, 15%' : '-30%, 30%';
  }
  return '30%, -30%';
};
export const Remove = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transform: translate(${p => setPosition(p)});
  color: rgba(0,0,0,0.5);
  // opacity: 0;
  transition: ${DEFAULT_TRANSITION}
  background-color: white;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  box-shadow: 0 0 2px 2px rgba(0,0,0, 0.5);
`;
export const Note = styled.p`
  margin: 0.625rem 0;
  color: #00a8ff;
  font-style: italic;
  font-size: 0.75rem;
`;
