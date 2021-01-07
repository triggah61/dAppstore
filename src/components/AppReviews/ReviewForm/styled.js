import styled from 'styled-components';

export const FormRatings = styled.div`
  &&& {
    form {
      label {
        font-family: PFSquareSansPro-Medium, sans-serif;
      }

      .DraftEditor-root {
        min-height: 6.25rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        resize: none;
        font-size: 1rem;
        color: #fff;
        margin-bottom: 1.25rem;
        margin-bottom: 0;
        padding: 0.9375rem 0.625rem;
      }

      .public-DraftEditor-content {
        min-height: 2.8125rem;
      }

      .public-DraftEditorPlaceholder-inner {
        color: #6b6b6b;
      }

      button {
        width: 6.25rem;
      }
    }
  }
`;
export const RatingError = styled.div`
  position: absolute;
  left: 1rem;
  bottom: -1rem;
  > div {
    margin: 0;
  }
`;
