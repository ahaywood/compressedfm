export default {
  type: 'object',
  name: 'contractInvoice',
  fieldsets: [
    { name: 'contract', title: 'Contract' },
    { name: 'invoice', title: 'Invoice' }
  ],
  preview: {
    select: {
      contractDateIssued: 'contractDateIssued',
      invoiceDescription: 'invoiceDescription'
    },
    prepare(selection) {
      const { contractDateIssued, invoiceDescription } = selection
      return {
        title: `${contractDateIssued} :: ${invoiceDescription}`
      }
    },
  },
  fields: [
    {
      name: 'contractDescription',
      title: 'Contract Description',
      type: 'string',
      description: 'Example: "Founding Sponsor" or "Bundle"',
      fieldset: 'contract'
    },
    {
      name: 'contractStatus',
      title: 'Contract Status',
      type: 'string',
      fieldset: 'contract',
      options: {
        list: [
          { title: 'Attn', value: 'attn' },
          { title: 'Signed', value: 'signed' },
        ]
      }
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
      name: 'contractPDF',
      title: 'Contract PDF',
      type: 'file',
      fieldset: 'contract',
    },
    {
      name: 'invoiceDescription',
      title: "Invoice Description",
      type: 'string',
      description: 'Example: "3 EPISODES: 60 seconds"',
      fieldset: 'invoice'
    },
    {
      name: 'invoiceStatus',
      title: 'Invoice Status',
      type: 'string',
      options: {
        list: [
          { title: 'Attn', value: 'attn' },
          { title: 'Paid', value: 'paid' },
        ]
      },
      fieldset: 'invoice'
    },
    {
      name: 'invoiceNumber',
      title: 'Invoice Number',
      type: 'string',
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
      type: 'string',
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