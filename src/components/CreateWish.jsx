import { useState } from 'react'

function CreateWish({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'food',
    time: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title && formData.description) {
      onSubmit(formData)
      setFormData({ title: '', description: '', category: 'food', time: '' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="create-wish">
      <h2>✨ New Wish</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="What do you wish for?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide details..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="food">🍔 Food</option>
            <option value="service">✨ Service</option>
            <option value="experience">🎭 Experience</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="time">Timeframe</label>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="e.g., 2h, 4h, 1 day"
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Create Wish
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateWish
