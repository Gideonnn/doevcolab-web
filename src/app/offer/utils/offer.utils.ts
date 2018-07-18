import { ApiOffer, ApiProductGroup, Offer, ProductGroup } from '../models';

export const toOffer = (offer: ApiOffer): Offer => {
  return {
    customer: offer.klant,
    buildingNumber: offer.straathuisnummer,
    postalCode: offer.postcode,
    city: offer.plaats,
    telephone: offer.telefoon,
    email: offer.email,
    project: offer.project,
  };
};

export const toProductGroup = (productGroup: ApiProductGroup): ProductGroup => {
  return {
    id: productGroup._id,
    name: productGroup.name,
    products: productGroup.Products,
  };
};
