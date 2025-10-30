import { useState } from 'react'

function Payment({ onBack, onComplete }) {
  const [selectedMethod, setSelectedMethod] = useState('card')
  
  const bidPrice = 45
  const serviceFee = 2.25
  const total = bidPrice + serviceFee

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      onComplete()
    }, 1000)
  }

  return (
    <div className="payment">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <h2>💳 Payment</h2>

      <div className="payment-summary">
        <div className="payment-row">
          <span>Bid Amount:</span>
          <span>${bidPrice.toFixed(2)}</span>
        </div>
        <div className="payment-row">
          <span>Service Fee:</span>
          <span>${serviceFee.toFixed(2)}</span>
        </div>
        <div className="payment-row payment-total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="payment-method">
        <h3>Payment Method</h3>
        <div className="payment-options">
          <div 
            className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('card')}
          >
            💳 Card
          </div>
          <div 
            className={`payment-option ${selectedMethod === 'wallet' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('wallet')}
          >
            👛 Wallet
          </div>
          <div 
            className={`payment-option ${selectedMethod === 'apple' ? 'selected' : ''}`}
            onClick={() => setSelectedMethod('apple')}
          >
            🍎 Apple Pay
          </div>
        </div>
      </div>

      <div className="escrow-info">
        🔒 Funds held in secure escrow until service completion
      </div>

      <div className="form-actions">
        <button className="btn btn-secondary" onClick={onBack}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handlePayment}>
          Pay ${total.toFixed(2)}
        </button>
      </div>
    </div>
  )
}

export default Payment
