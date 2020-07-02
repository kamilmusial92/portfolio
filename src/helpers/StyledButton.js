import styled from "styled-components"

export default styled.button`
  border: 1px solid ${({ theme }) => theme.colors.darkblue};
  border-radius: 30px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.blue};

  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background 0.1s;
  &:hover {
    background: ${({ theme }) => theme.colors.darkblue};
  }
  ${({ theme }) => theme.mq.mobile} {
    padding: 5px 8px;
    font-size: 12px;
  }
`
