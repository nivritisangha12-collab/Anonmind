// Function 1: Handle Post Submission and Store
document.addEventListener('DOMContentLoaded', function() {
  const postBtn = document.getElementById('postBtn');
  const postText = document.getElementById('postText');
  
  if (postBtn && postText) {
    postBtn.addEventListener('click', function() {
      const text = postText.value.trim();
      
      if (text !== '') {
        // Get existing posts from localStorage
        let posts = JSON.parse(localStorage.getItem('posts') || '[]');
        
        // Add new post
        const newPost = {
          content: text,
          time: new Date().toLocaleString()
        };
        posts.unshift(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
        
        // Clear textarea
        postText.value = '';
        alert('Your anonymous post has been shared!');
      }
    });
  }
});

// Function 2: Display Posts in Feed
document.addEventListener('DOMContentLoaded', function() {
  const feedContainer = document.getElementById('feed');
  
  if (feedContainer) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    
    if (posts.length === 0) {
      feedContainer.innerHTML = '<div class="post"><p>No posts yet. Be the first to share your thought!</p></div>';
    } else {
      feedContainer.innerHTML = posts.map(post => `
        <div class="post">
          <div class="post-content">${post.content}</div>
          <div class="post-actions">
            <button>❤️ 0</button>
            <span class="post-time">${post.time}</span>
          </div>
        </div>
      `).join('');
    }
  }
});

// Function 3: Display Posts in Profile and Update Stats
document.addEventListener('DOMContentLoaded', function() {
  const profilePosts = document.getElementById('profilePosts');
  const postsCount = document.getElementById('postsCount');
  const followBtn = document.getElementById('followBtn');
  
  // Update posts count and display posts
  if (profilePosts && postsCount) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    postsCount.textContent = posts.length;
    
    if (posts.length === 0) {
      profilePosts.innerHTML = '<p style="grid-column: 1 / -1; opacity: 0.7; text-align: center;">No posts yet</p>';
    } else {
      profilePosts.innerHTML = posts.map(post => `
        <div class="profile-post-item">
          <p>${post.content.substring(0, 60)}${post.content.length > 60 ? '...' : ''}</p>
        </div>
      `).join('');
    }
  }
  
  // Toggle follow button
  if (followBtn) {
    followBtn.addEventListener('click', function() {
      if (followBtn.textContent === 'Follow') {
        followBtn.textContent = 'Following';
        followBtn.style.background = '#ff6b9d';
        followBtn.style.color = 'white';
      } else {
        followBtn.textContent = 'Follow';
        followBtn.style.background = 'white';
        followBtn.style.color = '#ff6b9d';
      }
    });
  }
});
