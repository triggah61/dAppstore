import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import * as SC from './styled';

export default props => (
  <SC.Container>
    <SC.Wrapper className="container">
      <SC.ChartTitle>Views</SC.ChartTitle>
      <ResponsiveContainer width="99%" aspect={3}>
        <AreaChart
          width={1097}
          height={350}
          data={props.stats}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" color="#fff" />
          <XAxis dataKey="name" tick={{ fill: '#fff', fontSize: 12 }} />
          <YAxis tick={{ fill: '#fff', fontSize: 12 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="views"
            stroke="#3D9FDE"
            fill="#105990"
          />
        </AreaChart>
      </ResponsiveContainer>
    </SC.Wrapper>
  </SC.Container>
);
