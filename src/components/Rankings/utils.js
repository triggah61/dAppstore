import React from 'react';
import * as SC from './styled';

export const nameFormat = (c, r) => (
  <SC.NameWrapper>
    <SC.AppImg bg={r.thumbnail || r.banner} />
    {r.name}
  </SC.NameWrapper>
);

export const APP_DATA_TABLE = [
  { dataField: 'id', title: '#', isKey: true, width: '50' },
  {
    dataField: 'name',
    title: 'Dapp',
    width: '200',
    dataSort: true,
    dataFormat: nameFormat,
  },
  {
    dataField: 'type',
    title: 'Category',
    width: '90',
    headerAlign: 'center',
    dataAlign: 'center',
    dataSort: true,
  },
];

export const STATS_ITEM = [
  '1029 Total dApps',
  '1029 Transactions 24h',
  '23355 Users 24h',
  '$ 123355 Vol 24h',
  '172341 Smart Contracts',
];
