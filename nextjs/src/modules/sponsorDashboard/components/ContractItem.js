import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tag } from 'modules/shared/components/Tag';
import { Icon } from 'modules/shared/components/Icon';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ContractItem = ({ contract }) => {
  const { contractDescription, contractDateIssued, contractStatus, contractPDF, quantity } = contract;
  return (
    <StyledContractItem>
      <div className="contract-status">
        <Tag label={contractStatus} />
      </div>
      <div className="contract-date">{contractDateIssued}</div>
      <div className="contract-quantity">{quantity}</div>
      <div className="contract-description">{contractDescription}</div>
      <div className="contract-arrow">
        <a href={contractPDF} target="_blank" rel="noreferrer">
          <Icon name="arrow" width="44" height="44" />
        </a>
      </div>
    </StyledContractItem>
  );
};

ContractItem.propTypes = {
  contract: PropTypes.shape({
    contractDescription: PropTypes.string,
    contractDateIssued: PropTypes.string,
    contractStatus: PropTypes.string,
    contractPDF: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledContractItem = styled.div`
  align-items: center;
  background: url('/images/horizontal-divider.svg') left top repeat-x;
  display: grid;
  grid-template-columns: 80px 100px 25px 1fr 50px;
  grid-column-gap: 30px;
  padding: 25px 0;

  .contract-date,
  .contract-quantity,
  .contract-description {
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
  }

  .contract-arrow svg {
    fill: ${(props) => props.theme.yellow};
  }
`;

export { ContractItem };
