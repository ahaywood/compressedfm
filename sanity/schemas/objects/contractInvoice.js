export default {
  type: 'object',
  name: 'contractInvoice',
  fieldsets: [
    { name: 'contract', title: 'Contract' },
    { name: 'invoice', title: 'Invoice' }
  ],
  fields: [
    {
      name: 'contractDescription',
      title: 'Contract Description',
      type: 'text',
      fieldset: 'contract'
    },
    {
      name: 'contractStatus',
      title: 'Contract Status',
      type: 'text',
      fieldset: 'contract',
    },
    {
      name: 'contractDateIssued',
      title: 'Contract Date Issued',
      type: 'date',
      fieldset: 'contract'
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      fieldset: 'contract'
    },
    {
      name: 'contractLink',
      title: 'Contract Link',
      description: 'Link to sign the contract via HelloSign',
      type: 'text',
      fieldset: 'contract',
    },
    {
      name: 'contractPDF',
      title: 'Contract PDF',
      type: 'file',
      fieldset: 'contract',
    },
    {
      name: 'invoiceDescription',
      title: "Invoice Description",
      type: 'text',
      fieldset: 'invoice'
    },
    {
      name: 'invoiceStatus',
      title: 'Invoice Status',
      type: 'text',
      fieldset: 'invoice'
    },
    {
      name: 'invoiceNumber',
      title: 'Invoice Number',
      type: 'number',
      fieldset: 'invoice'
    },
    {
      name: 'invoiceAmount',
      title: 'Invoice Amount',
      type: 'number',
      fieldset: 'invoice'
    },
    {
      name: 'invoiceLink',
      title: 'Invoice Link',
      description: 'Link to pay the invoice in FreshBooks',
      type: 'text',
      fieldset: 'invoice'
    },
    {
      name: 'invoicePDF',
      title: 'Invoice PDF',
      type: 'file',
      fieldset: 'invoice'
    }
  ]
}