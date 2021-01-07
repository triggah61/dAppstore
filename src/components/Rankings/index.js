import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

import ContentContainer from 'components/Common/ContentContainer';
import Button from 'components/Common/Button';
import { APP_DATA_TABLE } from './utils';
import Filters from './Filters';
import TopItems from './TopItems';
import * as SC from './styled';

const ITEM_PER_PAGE = 10;

const Rankings = props => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const { allApps } = props;
  const appLength = allApps.length;
  const allItems = page * ITEM_PER_PAGE;

  const tableData = allApps
    .filter(app => app.name.includes(searchText))
    .slice(0, allItems);

  return (
    <ContentContainer>
      <TopItems />
      <SC.TableContainer>
        <Container>
          <Row>
            <Col>
              <SC.TableInner>
                <SC.TitleContainer>
                  <h4>
                    <img
                      src="assets/images/rankings/medal2.png"
                      alt="dApps Rankings"
                    />
                    dApps Rankings
                  </h4>
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Search"
                    onChange={e => setSearchText(e.target.value)}
                  />
                </SC.TitleContainer>
                <Filters />
                <SC.Table>
                  <BootstrapTable bordered={false} data={tableData}>
                    {APP_DATA_TABLE.map(item => (
                      <TableHeaderColumn key={item.dataField} {...item}>
                        {item.title}
                      </TableHeaderColumn>
                    ))}
                  </BootstrapTable>
                </SC.Table>
                <SC.ButtonContainer>
                  {appLength > allItems && (
                    <Button onClick={() => setPage(page + 1)}>View More</Button>
                  )}
                </SC.ButtonContainer>
              </SC.TableInner>
            </Col>
          </Row>
        </Container>
      </SC.TableContainer>
    </ContentContainer>
  );
};
export default Rankings;
