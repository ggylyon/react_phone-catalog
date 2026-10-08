import cartIcon from '../../assets/icons/cart.svg';
import favouritesIcon from '../../assets/icons/favourites.svg';

export const headerActionsItems = [
  { to: '/favourites', icon: favouritesIcon, alt: 'Favourites' },
  { to: '/cart', icon: cartIcon, alt: 'Cart' },
] as const;

export const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Phones', to: '/phones' },
  { label: 'Tablets', to: '/tablets' },
  { label: 'Accessories', to: '/accessories' },
] as const;
