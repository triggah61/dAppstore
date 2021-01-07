import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import * as SC from './styled';
import { STATS_ITEM } from '../utils';

const DefaultTopItem = () => (
  <SC.TopItemsContainer>
    <Container>
      <Row>
        <Col sm={6} lg={3}>
          <TopItem />
        </Col>
        <Col sm={6} lg={3}>
          <TopItem />
        </Col>
        <Col sm={6} lg={3}>
          <TopItem />
        </Col>
        <Col sm={6} lg={3}>
          <TopItem />
        </Col>
      </Row>
    </Container>
    <SC.ValuesContainer>
      <Container>
        <Row>
          <Col>
            <ul>
              {STATS_ITEM.map((stat, i) => (
                <li key={i}>{stat}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </SC.ValuesContainer>
  </SC.TopItemsContainer>
);
export default DefaultTopItem;

export const TopItem = () => (
  <SC.TopItem>
    <div>
      <img
        src="assets/images/rankings/cryptokitties.png"
        alt="Crypto Kitties"
      />
    </div>
    <div>
      <h6>CryptoKitties</h6>
      <p>Cryptocollectible kitties on blockchain</p>
      <ul>
        <li>Spyce</li>
        <li>Ethereum</li>
        <li>Bitcoin</li>
      </ul>
    </div>
  </SC.TopItem>
);
