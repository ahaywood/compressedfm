import styled from 'styled-components';

const ContractItem = () => (
  <StyledContractItem>
    <div className="contract-status">
      <span>Attn</span>
    </div>
    <div className="contract-date">02.28.21</div>
    <div className="contract-quantity">3</div>
    <div className="contract-description">Bundle</div>
    <div className="contract-arrow">{/* <Icon name="arrow" /> */}</div>
  </StyledContractItem>
);

const StyledContractItem = styled.section``;

export { ContractItem };
