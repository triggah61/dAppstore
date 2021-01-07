import React from 'react';

import * as SC from './styled';

const Search = ({ onClick }) => (
  <SC.SearchWrapper>
    <SC.SearchButton onClick={onClick} to="/search">
      <img src="assets/images/ic-search.png" alt="search" />
    </SC.SearchButton>
  </SC.SearchWrapper>
);

export default Search;
