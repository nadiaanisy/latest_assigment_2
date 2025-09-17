import { Main } from '../sections/Main';
import { Teams } from '../sections/Teams';
import { CartItem } from '../../assets/interfaces';
import { TrustSignals } from '../sections/TrustSignals';
import { VisionMission } from '../sections/VisionMission';

type CartItemProps = {
  onNavigate: (page: string) => void;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
};
export function HomePage({onNavigate, addToCart}: CartItemProps) {
  return (
    <main>
      <Main onNavigate={onNavigate} addToCart={addToCart} />
      <VisionMission />
      <Teams />
      <TrustSignals />
    </main>
  )
}