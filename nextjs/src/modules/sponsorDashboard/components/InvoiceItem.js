import styled from 'styled-components';

const InvoiceItem = () => (
  <StyledInvoiceItem>
    <div className="invoice-status">
      <span>Attn</span>
    </div>
    <div className="invoice-number">#0093</div>
    <div className="invoice-description">3 EPISODES: 60 seconds</div>
    <div className="invoice amount">$150</div>
    <div className="invoice-arrow">{/* <Icon name="arrow" /> */}</div>
  </StyledInvoiceItem>
);

const StyledInvoiceItem = styled.section`
  position: relative;
`;

export { InvoiceItem };
