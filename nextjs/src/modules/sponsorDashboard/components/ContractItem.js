import styled from 'styled-components';
import { Tag } from 'modules/shared/components/Tag';
import { Icon } from 'modules/shared/components/Icon';

const ContractItem = ({ contractDescription, contractDateIssued, contractStatus, contractPDF, quantity }) => (
  <StyledContractItem>
    <div className="contract-status">
      <Tag label={contractStatus} />
    </div>
    <div className="contract-date">{contractDateIssued}</div>
    <div className="contract-quantity">{quantity}</div>
    <div className="contract-description">{contractDescription}</div>
    <div className="contract-arrow">
      <a href={contractPDF} target="_blank" rel="noreferrer">
        <Icon name="arrow" />
      </a>
    </div>
  </StyledContractItem>
);

const StyledContractItem = styled.section`
  display: grid;
  grid-template-columns: 100px 100px 50px 1fr 50px;
`;

export { ContractItem };
