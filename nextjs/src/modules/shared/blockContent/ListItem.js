import styled from 'styled-components';
import { MixinBodyCopy } from 'styles/Typography';

const ListItem = (props) => {
  if (props.node.listItem === 'number') {
    return <StyledLi>{props.children}</StyledLi>;
  }
  if (props.node.listItem === 'bullet') {
    return <StyledLi>{props.children}</StyledLi>;
  }
};

export { ListItem };

const StyledLi = styled.li`
  ${MixinBodyCopy};
  margin-bottom: 10px;

  a {
    border-bottom: 1px solid ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.yellow};
    font-weight: ${(props) => props.theme.fontBold};
    text-decoration: none;

    &:hover {
      border-color: ${(props) => props.theme.lavenderIndigo};
      color: ${(props) => props.theme.lavenderIndigo};
    }
  }
`;
