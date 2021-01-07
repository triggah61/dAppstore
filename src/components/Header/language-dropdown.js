import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ImageDropdown = ({ onClick }) => (
  <Dropdown className="header-dropdown">
    <Dropdown.Toggle variant="primary" id="dropdownMenuButton">
      <img src="assets/images/top-ic-earth.png" alt="translate" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={onClick}>KR</Dropdown.Item>
      <Dropdown.Item onClick={onClick}>ENG</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default ImageDropdown;
