import React from 'react';
import { Form } from 'react-bootstrap';

import Button from '~/components/Common/Button';
import * as SC from './styled';
import FilterContainer from './filter-container';

export default props => (
  <SC.FilterWrapper>
    <FilterContainer title={props.buttonListTitle || 'Categories'}>
      <SC.ButtonList>
        <Button type="button" size="sm">
          All
        </Button>
      </SC.ButtonList>
    </FilterContainer>
    <FilterContainer title={props.dropDownTitle || 'Filter by'}>
      <SC.ButtonList>
        <Form.Control as="select" size="sm">
          <option>All Dapps</option>
        </Form.Control>
      </SC.ButtonList>
    </FilterContainer>
  </SC.FilterWrapper>
);
