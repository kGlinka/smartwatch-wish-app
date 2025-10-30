import { useState } from 'react'

function WishBoard({ wishes, onWishClick, onCreateNew }) {
  const [filter, setFilter] = useState('all')

  const filteredWishes = filter === 'all' 
    ? wishes 
    : wishes.filter(wish => wish.category === filter)

  return (
    <div className="wish-board">
      <h2>My Wishes</h2>
      
      <div className="filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'food' ? 'active' : ''}`}
          onClick={() => setFilter('food')}
        >
          🍔 Food
        </button>
        <button 
          className={`filter-btn ${filter === 'service' ? 'active' : ''}`}
          onClick={() => setFilter('service')}
        >
          ✨ Service
        </button>
        <button 
          className={`filter-btn ${filter === 'experience' ? 'active' : ''}`}
          onClick={() => setFilter('experience')}
        >
          🎭 Experience
        </button>
      </div>

      <div className="wish-list">
        {filteredWishes.map(wish => (
          <div 
            key={wish.id} 
            className="wish-card"
            onClick={() => onWishClick(wish)}
          >
            <h3>{wish.title}</h3>
            <p>{wish.description}</p>
            <div className="wish-meta">
              <span className="wish-category">{wish.category}</span>
              <span className="wish-time">⏱️ {wish.time}</span>
              <span className="wish-status">
                {wish.bids.length > 0 ? `${wish.bids.length} bids` : 'Pending'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="create-btn" onClick={onCreateNew}>
        +
      </button>
    </div>
  )
}

export default WishBoard
