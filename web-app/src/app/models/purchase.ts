export class Purchase {
  id: string;
  customerId: string;
  productId: string;
  purchasedOn: Date;
  validFrom: Date;
  validTo: Date;
  qrCode: string;
}
