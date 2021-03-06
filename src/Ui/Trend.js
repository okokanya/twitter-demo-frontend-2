import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import index from '../index.css';

const Wrapper = styled.div`
  margin-bottom: 20px;
  color: #667785;
  font-size: 12px;
`;

const Header = styled.a`
  display: block;
  /* color: --blue; */
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`;

const makeMeTheKey = input => {
  if (input > 10000) {
    return Math.round((input / 1000) * 10) / 10 + 'K';
  }
  return <FormattedNumber value={input} />;
};

const Trend = ({ title, count, link, children }) => (
  <Wrapper>
    <Header href={link}>{title}</Header>
    {count && <span>{makeMeTheKey(count)} Tweets</span>}
    {children}
  </Wrapper>
);

export default Trend;
