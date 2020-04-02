import styled from 'styled-components';

export default styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;
  margin-top: -10px;
  text-align: left;

  font-size: 16px;

  tr {
    td,
    th {
      padding-left: 25px;

      &:last-child {
        text-align: center;
      }
    }
  }

  thead {
    color: #444444;
    font-weight: bold;
  }

  tbody {
    color: #666666;
    background: #ffffff;

    td {
      max-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      height: 57px;

      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
`;
