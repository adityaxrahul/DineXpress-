import React, { useState, useEffect } from 'react';

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ id: '', name: '', category: 'Burger', price: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/food/fetchall");
      const json = await response.json();
      if (json.success) setItems(json.items);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      
      try {
        const response = await fetch(`http://localhost:5000/api/food/update/${formData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.name, category: formData.category, price: formData.price })
        });
        const json = await response.json();
        if (json.success) {
          alert('Item updated successfully!');
          setIsEditing(false);
          setFormData({ id: '', name: '', category: 'Burger', price: '' });
          fetchItems();
        }
      } catch (e) { console.error(e); }
    } else {
      
      try {
        const response = await fetch("http://localhost:5000/api/food/add", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.name, category: formData.category, price: formData.price })
        });
        const json = await response.json();
        if (json.success) {
          alert('Item added successfully!');
          setFormData({ id: '', name: '', category: 'Burger', price: '' });
          fetchItems();
        }
      } catch (e) { console.error(e); }
    }
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setFormData({ id: item._id, name: item.name, category: item.category, price: item.price });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      const response = await fetch(`http://localhost:5000/api/food/delete/${id}`, { method: 'DELETE' });
      const json = await response.json();
      if (json.success) {
        alert('Item deleted successfully!');
        fetchItems();
      }
    } catch (e) { console.error(e); }
  };

  const categories = ["Burger", "Pizza", "Biryani", "Cake", "North Indian", "Chicken", "Momos", "Rolls", "Paneer"];

  return (
    <div style={{ padding: '40px', fontFamily: '"Inter", sans-serif', maxWidth: '1200px', margin: '0 auto', color: '#333' }}>
      <h1 style={{ textAlign: 'center', color: '#b85c38', marginBottom: '30px' }}>Admin Dashboard 🍔</h1>
      
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {}
        <div style={{ flex: '1 1 350px', background: '#fff8f3', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)', height: 'fit-content' }}>
          <h2 style={{ marginBottom: '20px', color: '#b85c38' }}>{isEditing ? '✏️ Edit Food Item' : '➕ Add Food Item'}</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Food Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
            </div>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Price (₹)</label>
              <input type="number" name="price" value={formData.price} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }} />
            </div>
            <button type="submit" style={{ padding: '12px', background: '#b85c38', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: '0.3s' }}>
              {isEditing ? 'Update Item' : 'Add Item'}
            </button>
            {isEditing && (
              <button type="button" onClick={() => { setIsEditing(false); setFormData({ id: '', name: '', category: 'Burger', price: '' }); }} style={{ padding: '12px', background: '#666', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        {}
        <div style={{ flex: '2 1 500px' }}>
          <h2 style={{ marginBottom: '20px', color: '#b85c38' }}>📋 All Menu Items</h2>
          {items.length === 0 ? <p>No items found. Please add some.</p> : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {items.map(item => (
                <div key={item._id} style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '15px', right: '15px', background: '#ffe4cc', color: '#b85c38', padding: '4px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.category}</span>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', paddingRight: '60px' }}>{item.name}</h3>
                  <p style={{ margin: '0 0 20px 0', color: '#333', fontWeight: 'bold', fontSize: '1.2rem' }}>₹{item.price}</p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => handleEdit(item)} style={{ flex: 1, padding: '8px', background: '#f3f4f6', color: '#333', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>✏️ Edit</button>
                    <button onClick={() => handleDelete(item._id)} style={{ flex: 1, padding: '8px', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>❌ Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
