import { useState } from 'react';
import { Spinner } from './Spinner';

export function SearchForm({ placeholder = 'Busca tu destino' }) {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) throw new Error('Error en la búsqueda');
      const data = await response.json();
      setResult(data);
      console.log('data', data)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={e => setQuery(e.target.value)}
        disabled={loading}
        style={{ flex: 1 }}
      />
      <button type="submit" className="search-form-button" disabled={loading} title="Buscar" style={{ position: 'relative', minWidth: 80 }}>
        {loading ? <Spinner /> : 'Buscar'}
      </button>
      {error && <span style={{ color: 'red', marginLeft: 8 }}>{error}</span>}
    </form>
  );
} 