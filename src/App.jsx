import { useState } from 'react'
import './App.css'
import WishBoard from './components/WishBoard'
import CreateWish from './components/CreateWish'
import WishDetail from './components/WishDetail'
import Messages from './components/Messages'
import Payment from './components/Payment'

function App() {
  const [currentView, setCurrentView] = useState('board')
  const [selectedWish, setSelectedWish] = useState(null)
  const [wishes, setWishes] = useState([
    {
      id: 1,
      title: 'Custom Birthday Cake',
      description: 'Need a custom birthday cake delivered in 2 hours',
      category: 'food',
      time: '2h',
      bids: [
        { id: 1, provider: 'Sweet Bakery', price: 45, rating: 4.8, estimatedTime: '1.5h' },
        { id: 2, provider: 'Cake Paradise', price: 52, rating: 4.9, estimatedTime: '2h' },
        { id: 3, provider: 'Daily Delights', price: 38, rating: 4.6, estimatedTime: '2.5h' }
      ],
      status: 'active'
    },
    {
      id: 2,
      title: 'Spa Massage',
      description: 'Looking for a relaxing spa massage session',
      category: 'service',
      time: '4h',
      bids: [
        { id: 1, provider: 'Zen Spa', price: 80, rating: 4.9, estimatedTime: '3h' },
        { id: 2, provider: 'Relaxation Center', price: 70, rating: 4.7, estimatedTime: '4h' }
      ],
      status: 'active'
    },
    {
      id: 3,
      title: 'Concert Tickets',
      description: '2 tickets to tonight\'s jazz concert',
      category: 'experience',
      time: '6h',
      bids: [],
      status: 'pending'
    }
  ])

  const handleCreateWish = (wish) => {
    const newWish = {
      id: wishes.length + 1,
      ...wish,
      bids: [],
      status: 'pending'
    }
    setWishes([newWish, ...wishes])
    setCurrentView('board')
  }

  const handleWishClick = (wish) => {
    setSelectedWish(wish)
    setCurrentView('detail')
  }

  const handleAcceptBid = (bid) => {
    setCurrentView('payment')
  }

  return (
    <div className="smartwatch-container">
      {/* Navigation */}
      {currentView !== 'create' && (
        <div className="nav-bar">
          <button 
            className={currentView === 'board' ? 'active' : ''} 
            onClick={() => setCurrentView('board')}
          >
            🏠
          </button>
          <button 
            className={currentView === 'messages' ? 'active' : ''} 
            onClick={() => setCurrentView('messages')}
          >
            💬
          </button>
        </div>
      )}

      {/* Content */}
      <div className="content">
        {currentView === 'board' && (
          <WishBoard 
            wishes={wishes} 
            onWishClick={handleWishClick}
            onCreateNew={() => setCurrentView('create')}
          />
        )}
        
        {currentView === 'create' && (
          <CreateWish 
            onSubmit={handleCreateWish}
            onCancel={() => setCurrentView('board')}
          />
        )}
        
        {currentView === 'detail' && selectedWish && (
          <WishDetail 
            wish={selectedWish}
            onBack={() => setCurrentView('board')}
            onAcceptBid={handleAcceptBid}
            onMessage={() => setCurrentView('messages')}
          />
        )}
        
        {currentView === 'messages' && (
          <Messages onBack={() => setCurrentView('board')} />
        )}
        
        {currentView === 'payment' && (
          <Payment 
            onBack={() => setCurrentView('detail')}
            onComplete={() => {
              alert('Payment successful!')
              setCurrentView('board')
            }}
          />
        )}
      </div>
    </div>
  )
}

export default App
