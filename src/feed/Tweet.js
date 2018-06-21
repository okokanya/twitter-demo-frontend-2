import React from 'react';
import styled from 'styled-components';
import {Comment, Retweet, Likes, Envelope} from '../ui/Icon';
import { distanceInWords } from 'date-fns';


const Container = styled.div `
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 10px 20px;
`;

const Avatar = styled.div `
  width: 50px;
  padding-right: 10px;
`;

const Body = styled.div `
  font-size: 26px;
  font-weight: 100;
  line-height: 30px;
  flex: 1 1 0;
`;

const Header = styled.div `
  height: 40px;
  display: flex;
  align-items: center;
  color: #66757F;
  font-size: 12px;

  em {
    color: black;
    font-style: normal;
    font-size: 14px;
    margin-right: 5px;
  }
`;

const Icons = styled.div `
  height: 40px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.span `
  font-size: 14px;
  line-height: 16px;
  margin-left: 4px;
  color: #667580;
  font-weight:600

  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`;

const Tweet = ({
  children,
  username,
  time,
  name,
  avatar,
  stat = []
}) => (
  <Container>
    <Avatar><img width={50} src={avatar} alt={username}/></Avatar>
    <Body>
      <Header>
        <em>{name}</em>
        @{username} {distanceInWords(time, new Date())}</Header>
      {children}
      <Icons>
        <Icon><Comment/>{stat.comment || ''}</Icon>
        <Icon><Retweet/>{stat.retweet || ''}</Icon>
        <Icon><Likes/>{stat.like || ''}</Icon>
        <Icon><Envelope/>{stat.message || ''}</Icon>
      </Icons>
    </Body>
  </Container>
);

export default Tweet;
