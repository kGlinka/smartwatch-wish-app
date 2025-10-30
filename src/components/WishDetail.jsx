function WishDetail({ wish, onBack, onAcceptBid, onMessage }) {
  return (
    <div className="wish-detail">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <h2>{wish.title}</h2>
      <p>{wish.description}</p>
      
      <div style={{ fontSize: '9px', marginBottom: '12px', color: 'rgba(255, 255, 255, 0.8)' }}>
        <div>Category: {wish.category}</div>
        <div>Timeframe: {wish.time}</div>
      </div>

      <div className="bids-section">
        <h3>Provider Bids ({wish.bids.length})</h3>
        
        {wish.bids.length === 0 ? (
          <div className="no-bids">
            Waiting for providers to submit bids...
          </div>
        ) : (
          wish.bids.map(bid => (
            <div key={bid.id} className="bid-card">
              <div className="bid-header">
                <span className="bid-provider">{bid.provider}</span>
                <span className="bid-rating">⭐ {bid.rating}</span>
              </div>
              
              <div className="bid-details">
                <span>💰 ${bid.price}</span>
                <span>⏱️ {bid.estimatedTime}</span>
              </div>

              <div className="bid-actions">
                <button 
                  className="btn-small btn-accept"
                  onClick={() => onAcceptBid(bid)}
                >
                  Accept Bid
                </button>
                <button 
                  className="btn-small btn-message"
                  onClick={onMessage}
                >
                  💬
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default WishDetail
