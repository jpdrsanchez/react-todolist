import { memo } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  align-items: center;
  display: flex;
  grid-column: span 2;
  justify-content: space-between;

  & > span {
    font-size: 1.125rem;
  }
`;

const DateBlock = styled.div`
  align-items: center;
  column-gap: 0.5rem;
  display: grid;
  font-family: 'Courier New', Courier, monospace;
  grid-template-areas:
    'day month'
    'day year';

  span {
    &:nth-child(1) {
      font-size: 3rem;
      font-weight: 700;
      grid-area: day;
      letter-spacing: -0.1em;
    }

    &:nth-child(2) {
      align-self: end;
      grid-area: month;
      text-transform: uppercase;
    }

    &:nth-child(3) {
      align-self: start;
      grid-area: year;
    }
  }
`;

const TodoHeader = () => {
  const now = new Date();
  const days = [
    'Sunday',
    'Monday ',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <Header>
      <DateBlock>
        <span>{now.getDate()}</span>
        <span>{months[now.getMonth()]}</span>
        <span>{now.getFullYear()}</span>
      </DateBlock>
      <span>{days[now.getDay()]}</span>
    </Header>
  );
};

export default memo(TodoHeader);
