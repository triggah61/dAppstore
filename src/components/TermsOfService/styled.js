import styled from 'styled-components';
import { mediaMin } from '~/utils';

export const Container = styled.div`
  min-height: 25rem;
  font-size: 0.875rem;
  color: #fff;
  padding-top: 5rem;

  ${mediaMin.lg`
    padding: 7.8125rem 0;
  `}

  ${mediaMin.md`
    padding: 7.8125rem 0;
  `}

  .sidebar {
    background: #223754;
    color: #fff;
    padding: 2rem 2rem 2.5rem 2rem;
    min-height: 93.75rem;

    .logo {
      width: 11rem;
      margin-bottom: 0.625rem;
      display: inline-bloc;
      padding-top: 0.75rem;
      img {
        width: 100%;
      }
    }

    .side-menu {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          &:hover {
            cursor: pointer;
          }
        }

        &.current {
          a {
            color: #0f78b8;
            cursor: default;
          }
        }
        margin: 1rem 0;
      }
    }
  }
  .main {
    background: #213e5c;
    font-size: 0.875rem;
    ${mediaMin.lg`
      padding: 2rem 2rem  15.1875rem 2rem;
    `}
    padding: 2rem 2rem 4.1875rem 2rem;

    section {
      min-height: 1rem;
      font-weight: normal;
      font-size: 0.875rem;
      color: #ccc;
      margin-bottom: 1.875rem;
      ${mediaMin.lg`
        padding-top: 2.5rem;
      `}

      h2 {
        font-size: 2.5625rem;
        font-weight: bold;
        color: #fff;
      }

      .section-title {
        font-size: 1rem;
        font-weight: bold;
        color: #fff;
      }

      p {
        color: #ccc;
        font-size: 0.875rem;
        &.desc-1 {
          font-size: 1rem;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
`;
