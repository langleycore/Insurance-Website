import { useState } from 'react';
import { videos, videoCategories } from '../data/videos';
import './Videos.css';

// Cache bust timestamp: 2026-09-20T19:28:00Z
export default function Videos() {
  const [selectedCategory, setSelectedCategory] = useState('All Videos');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const filteredVideos = selectedCategory === 'All Videos'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  const handleVideoClick = (youtubeId: string) => {
    // Don't open video modal for placeholder entries
    if (youtubeId === 'PLACEHOLDER') {
      return;
    }
    setSelectedVideo(youtubeId);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handleClearCache = () => {
    // Clear all caches and force reload
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => caches.delete(name));
      });
    }
    // Add timestamp to force reload with new URL
    window.location.href = window.location.href.split('?')[0] + '?v=' + Date.now();
  };

  const handleImageLoad = (youtubeId: string) => {
    setLoadedImages(prev => new Set(prev).add(youtubeId));
  };

  const handleImageError = (youtubeId: string, currentAttempt: number) => {
    const newErrors = new Set(imageErrors);
    newErrors.add(`${youtubeId}-${currentAttempt}`);
    setImageErrors(newErrors);
  };

  const getThumbnailUrl = (youtubeId: string) => {
    // Try multiple thumbnail URLs in order of preference
    const errorCount = Array.from(imageErrors).filter(e => e.startsWith(youtubeId)).length;
    
    // Try different CDNs and qualities
    switch(errorCount) {
      case 0:
        return `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
      case 1:
        return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
      case 2:
        return `https://img.youtube.com/vi/${youtubeId}/sddefault.jpg`;
      case 3:
        return `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
      default:
        return `https://img.youtube.com/vi/${youtubeId}/0.jpg`;
    }
  };

  const getErrorAttempt = (youtubeId: string) => {
    return Array.from(imageErrors).filter(e => e.startsWith(youtubeId)).length;
  };

  return (
    <div className="videos-container">
      <div className="videos-header">
        <h2>📺 Video Learning Library</h2>
        <p className="videos-intro">
          Comprehensive video lessons covering all Virginia Personal Lines exam topics. Watch expert explanations
          of insurance concepts, policies, and exam strategies.
        </p>
        <button className="clear-cache-btn" onClick={handleClearCache} title="Clear cache and reload if videos aren't showing correctly">
          🔄 Clear Cache & Reload
        </button>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {videoCategories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Count */}
      <div className="video-count">
        <span>{filteredVideos.length} videos available</span>
      </div>

      {/* Video Grid */}
      <div className="videos-grid">
        {filteredVideos.map(video => (
          <div 
            key={video.id} 
            className={`video-card ${video.youtubeId === 'PLACEHOLDER' ? 'placeholder-card' : ''}`}
            onClick={() => handleVideoClick(video.youtubeId)}
            style={{ cursor: video.youtubeId === 'PLACEHOLDER' ? 'default' : 'pointer' }}
          >
            <div className="video-thumbnail">
              {video.youtubeId !== 'PLACEHOLDER' ? (
                <>
                  {!loadedImages.has(video.youtubeId) && (
                    <div className="thumbnail-loading">
                      <div className="loading-spinner"></div>
                    </div>
                  )}
                  <img
                    src={getThumbnailUrl(video.youtubeId)}
                    alt={video.title}
                    loading="lazy"
                    onLoad={() => handleImageLoad(video.youtubeId)}
                    onError={() => handleImageError(video.youtubeId, getErrorAttempt(video.youtubeId))}
                    referrerPolicy="no-referrer"
                    style={{ opacity: loadedImages.has(video.youtubeId) ? 1 : 0 }}
                  />
                  <div className="play-overlay">
                    <svg width="68" height="48" viewBox="0 0 68 48">
                      <path fill="#fff" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"/>
                      <path fill="#FF0000" d="M 45,24 27,14 27,34"/>
                    </svg>
                  </div>
                  <span className="video-duration">{video.duration}</span>
                </>
              ) : (
                <div className="placeholder-thumbnail">
                  <div className="coming-soon-badge">🎬 COMING SOON</div>
                </div>
              )}
            </div>
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <div className="video-meta">
                <span className="video-channel">📺 {video.channel}</span>
                <span className="video-category">{video.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={handleCloseVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={handleCloseVideo}>✕</button>
            <div className="video-player-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Study Tips */}
      <div className="video-tips">
        <h3>📚 How to Use These Videos Effectively</h3>
        <ul>
          <li><strong>Start with fundamentals:</strong> Watch General Insurance and Virginia Regulations videos first</li>
          <li><strong>Take notes:</strong> Pause videos and write down key concepts and definitions</li>
          <li><strong>Watch multiple times:</strong> Complex topics benefit from repeated viewing</li>
          <li><strong>Practice after watching:</strong> Test your knowledge with practice questions after each video</li>
          <li><strong>Focus on weak areas:</strong> Use analytics to identify topics needing more video study</li>
          <li><strong>Exam strategy last:</strong> Save exam strategy videos for final preparation</li>
        </ul>
      </div>
    </div>
  );
}
