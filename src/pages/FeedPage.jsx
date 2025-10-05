function FeedPage() {
  const fakePosts = [
    { id: 1, username: 'john', content: 'Just setting up my social app!', timestamp: '2h ago' },
    { id: 2, username: 'sarah', content: 'This is pretty cool', timestamp: '5h ago' },
    { id: 3, username: 'mike', content: 'Hello world!', timestamp: '1d ago' }
  ]

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Feed</h1>
      
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc' }}>
        <textarea 
          placeholder="What's happening?" 
          style={{ width: '100%', padding: '10px', marginBottom: '10px', minHeight: '80px' }}
        />
        <button style={{ padding: '10px 20px', background: '#1da1f2', color: 'white', border: 'none', cursor: 'pointer' }}>
          Post
        </button>
      </div>

      {fakePosts.map(post => (
        <div key={post.id} style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '10px' }}>
          <strong>{post.username}</strong> <span style={{ color: '#666' }}>• {post.timestamp}</span>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default FeedPage