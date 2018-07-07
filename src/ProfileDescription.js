import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import Avatar from './Ui/Avatar';
import Button from './Ui/Button';
import { Location, LinkIcon, Joined, Followers, Photo } from './Ui/Icon';
import LeftSideBlock from './Ui/LeftSideBlock';
import Picture from './Ui/Picture';
import { followersYouKnow, photosVideos } from './data';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
`;

const Descavatar = styled.div`
  margin-top: -160px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  font-size: 22px;
  font-weight: 800;
`;

const Subheader = styled.div`
  color: #697786;
  font-size: 14px;
  margin-bottom: 20px;

  span {
    padding: 8px;
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

const Icon = styled.li`
  list-style-type: none;
  line-height: 16px;
  color: #697786;
  font-size: 14px;
  margin: 10px 0 20px 0;
  display: flex;
  align-items: center;
`;

const IconImg = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ProfileDescription = ({ user }) => (
  <Container>
    <Descavatar>
      <Avatar big src={user.avatar_static} />
    </Descavatar>
    <Header>{user.display_name}</Header>
    <Subheader>
      @{user.username}
      <span>follows you</span>
    </Subheader>
    <Description>
      <div dangerouslySetInnerHTML={{ __html: user.note }} />
    </Description>
    <ul>
      <Icon>
        <IconImg>
          <Location />
        </IconImg>London
      </Icon>
      <Icon>
        <IconImg>
          <LinkIcon />
        </IconImg>
        <a href={user.url}>{user.url}</a>
      </Icon>
      <Icon>
        <IconImg>
          <Joined />
        </IconImg>Joined {format(user.created_at, 'D MMMM YYYY')}
      </Icon>
    </ul>
    <Buttons>
      <Button blue block>
        Tweet to
      </Button>
      <Button blue block>
        Message
      </Button>
    </Buttons>

    <LeftSideBlock icon={Followers} count={6} title="Followers you know">
      {followersYouKnow.map(pick => (
        <Picture small src={pick.img} link={pick.link} />
      ))}
    </LeftSideBlock>

    <LeftSideBlock icon={Photo} count={522} title="photos and videos">
      {photosVideos.map(pick => <Picture src={pick.img} link={pick.link} />)}
    </LeftSideBlock>
  </Container>
);

export default ProfileDescription;
