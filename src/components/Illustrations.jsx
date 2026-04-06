import mobilePayment from '../assets/mobile_payment.png';
import cardPayment from '../assets/card_payment.png';
import bankTransfer from '../assets/bank_transfer.png';

// Since the fourth generation failed, we reuse/placeholder or use a CSS-based illustration
// For now, I'll use the mobile payment as a hero and others for specific features.

export const HeroIllustration = () => (
  <div className="relative">
      <img 
        src={mobilePayment} 
        alt="Fintech Illustration" 
        className="w-full h-auto drop-shadow-2xl animate-pulse-slow"
        style={{ animationDuration: '6s' }}
      />
  </div>
);

export const PaymentIllustration = () => (
  <img src={mobilePayment} alt="Payment" className="w-full h-auto filter brightness-110 drop-shadow-xl" />
);

export const CardIllustration = () => (
  <img src={cardPayment} alt="Card Payment" className="w-full h-auto filter brightness-110 drop-shadow-xl" />
);

export const BankIllustration = () => (
  <img src={bankTransfer} alt="Bank Transfer" className="w-full h-auto filter brightness-110 drop-shadow-xl" />
);
