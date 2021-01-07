import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useAxios from 'axios-hooks';
import format from 'date-fns/format';

import { Container, Row, Col, Table } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';

import Loader from 'components/Common/Loader';
import NotFound from 'pages/NotFound';
import { selectors } from 'modules/session';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import * as SC from './styled';

const DATE_FORMAT = 'MMM. dd, yyyy kk:mm';
const GUEST = 'Guest';

const OrderHistoryContainer = props => {
  const { userProfile } = props;
  const [{ data, loading, error }, refetch] = useAxios(
    `/purchases?count=1000&page=1&sender=${userProfile.email_address}`
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <Loader height="100vh" loading={!data} />;
  if (error) return <NotFound />;

  const formatData = data.data.map(item => {
    const createAt = format(new Date(item.created_at), DATE_FORMAT);
    const newFormatedData = {
      ...item,
      created_at: createAt,
      sender: item.sender || GUEST,
    };
    return newFormatedData;
  });

  const amountFormatter = (_, row) => {
    return `$ ${row.total_amount.toFixed(2)}`;
  };

  const { SearchBar } = Search;

  const columns = [
    {
      dataField: 'paypal_order_id',
      text: 'Order ID',
    },
    {
      dataField: 'total_amount',
      text: 'Total Amount',
      formatter: amountFormatter,
    },
    {
      dataField: 'sender',
      text: 'Sender',
    },
    {
      dataField: 'email_address',
      text: 'Recipient',
    },
    {
      dataField: 'created_at',
      text: 'Date Purchased',
      sort: true,
    },
  ];

  const options = {
    custom: true,
    paginationSize: 5,
    pageStartIndex: 1,
    alwaysShowAllBtns: true,
    withFirstAndLast: false,
    firstPageText: '<<',
    prePageText: '<',
    nextPageText: '>',
    lastPageText: '>>',
    nextPageTitle: 'Next page',
    prePageTitle: 'Previous page',
    firstPageTitle: 'First page',
    lastPageTitle: 'Last page',
    showTotal: true,
    totalSize: data.data.length,
    sizePerPageList: [
      {
        text: '10',
        value: 10,
      },
      {
        text: '20',
        value: 20,
      },
      {
        text: '30',
        value: 30,
      },
    ],
  };

  const defaultSorted = [
    {
      dataField: 'created_at',
      order: 'desc',
    },
  ];

  const emptyState = () => {
    return <p className="mb-0">Table is Empty</p>;
  };

  const Renderer = row => (
    <div className="inner-table-wrapper">
      <Table striped hover className="voucher-table mb-0">
        <thead>
          <tr>
            <th>Image</th>
            <th>Voucher</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {row.purchase_items.map(item => {
            return (
              <tr key={row.paypal_order_id}>
                <td>
                  <div className="image_conatiner">
                    <img
                      src={item.voucher_image || 'assets/images/app-logo.png'}
                      width="100%"
                      alt={item.voucher_title}
                    />
                  </div>
                </td>
                <td>{item.voucher_title}</td>
                <td>{item?.quantity || 0}</td>
                <td>$ {item.price}</td>
                <td>$ {(item.price * item?.quantity || 0).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );

  const ExpandColumnRenderer = ({ expanded }) => {
    const viewMoreClass = `ml-1 fa-fw fas fa-chevron-${
      expanded ? 'down' : 'right'
    }`;
    return (
      <span>
        View more <i className={viewMoreClass} />
      </span>
    );
  };

  const expandRow = {
    renderer: Renderer,
    parentClassName: 'expand-active',
    showExpandColumn: true,
    expandColumnPosition: 'right',
    onlyOneExpanding: true,
    expandByColumnOnly: true,
    expandHeaderColumnRenderer: () => null,
    expandColumnRenderer: ExpandColumnRenderer,
  };

  const contentTable = ({ paginationProps, paginationTableProps }) => (
    <ToolkitProvider keyField="id" data={formatData} columns={columns} search>
      {toolkitprops => (
        <div className="table-inner-wrap">
          <div className="table-header">
            <h2 className="table-title">Order History</h2>
            <SearchBar {...toolkitprops.searchProps} />
          </div>
          <div className="table-body">
            <BootstrapTable
              classes="order-table"
              bordered={false}
              expandRow={expandRow}
              defaultSorted={defaultSorted}
              noDataIndication={emptyState}
              {...toolkitprops.baseProps}
              {...paginationTableProps}
            />
          </div>
          <div className="table-footer">
            <PaginationListStandalone {...paginationProps} />
          </div>
        </div>
      )}
    </ToolkitProvider>
  );

  return (
    <SC.Container>
      <Container>
        <Row>
          <Col>
            <div className="table-wrapper">
              <PaginationProvider pagination={paginationFactory(options)}>
                {contentTable}
              </PaginationProvider>
            </div>
          </Col>
        </Row>
      </Container>
    </SC.Container>
  );
};

const mapStateToProps = state => {
  return {
    userProfile: selectors.userProfile(state),
  };
};

export default connect(mapStateToProps)(OrderHistoryContainer);
