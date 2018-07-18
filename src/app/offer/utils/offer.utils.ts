import { ApiOffer, ApiProduct, ApiProductGroup, Offer, Product, ProductGroup } from '../models';

export const toOffer = (offer: ApiOffer): Offer => {
  return {
    buildingNumber: offer.straathuisnummer,
    city: offer.plaats,
    customer: offer.klant,
    email: offer.email,
    id: offer._id,
    postalCode: offer.postcode,
    project: offer.project,
    telephone: offer.telefoon,
  };
};

export const toProductGroup = (productGroup: ApiProductGroup): ProductGroup => {
  return {
    id: productGroup._id,
    name: productGroup.name,
    products: productGroup.Products.map(toProduct),
  };
};

export const toProduct = (product: ApiProduct): Product => {
  return {
    articleNumber: product.articleNumber,
    brand: product.brand,
    id: product._id,
    model: product.model,
    properties: product.properties,
    purchasePrice: product.purchasePrice,
    sellingPrice: product.sellingPrice,
    supplier: product.supplier,
  };
};
