import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'modules/shared/components/Icon';
import { Tag } from 'modules/shared/components/Tag';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const InvoiceItem = ({ invoice }) => {
  const { invoiceDescription, invoiceNumber, invoiceAmount, invoiceStatus, invoiceLink } = invoice;
  return (
    <StyledInvoiceItem>
      <div className="invoice-status">
        <Tag className={invoiceStatus === 'attn' ? 'alert' : ''} label={invoiceStatus} />
      </div>
      <div className="invoice-number">#{invoiceNumber}</div>
      <div className="invoice-description">{invoiceDescription}</div>
      <div className="invoice-amount">${invoiceAmount}</div>
      <div className="invoice-arrow">
        <a href={invoiceLink}>
          <Icon name="arrow" width="44" height="44" />
        </a>
      </div>
    </StyledInvoiceItem>
  );
};

InvoiceItem.propTypes = {
  invoice: PropTypes.shape({
    invoiceDescription: PropTypes.string,
    invoiceNumber: PropTypes.string,
    invoiceAmount: PropTypes.number,
    invoiceStatus: PropTypes.string,
    invoiceLink: PropTypes.string,
  }).isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledInvoiceItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 75px 50px 1fr 75px 50px;
  grid-column-gap: 30px;
  position: relative;
  background: url('/images/horizontal-divider.svg') left top repeat-x;
  padding: 25px 0;

  .invoice-number {
    color: white;
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
  }

  .invoice-description {
    color: white;
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
  }

  .invoice-amount {
    color: white;
    font-size: 3rem;
    font-family: ${(props) => props.theme.sansSerif};
  }

  .invoice-arrow {
    svg {
      fill: ${(props) => props.theme.yellow};
    }
  }
`;

export { InvoiceItem };
