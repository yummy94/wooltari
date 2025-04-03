"use client";

import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState('en');
  
  // Function to handle sharing
  const handleShare = async () => {
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      // If in React Native WebView, send message to the app
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'share',
        data: {
          url: window.location.href,
          title: 'Wooltari App'
        }
      }));
    } else if (navigator.share) {
      // If Web Share API is available, use it
      try {
        await navigator.share({
          title: 'Wooltari App',
          text: 'Check out this app',
          url: window.location.href,
        });
        console.log('Content shared successfully');
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support sharing
      alert('Share feature not supported on this browser');
    }
  };


  
  
  // Function to handle language change
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'languageChange',
        data: {
          language: newLanguage
        }
      }));
    } else {
      alert(`Language changed to ${newLanguage}`);
    }
  };

  return (
    <main className={styles.main}>
      <h1>Wooltari Web App</h1>
      
      <div className={styles.card}>
        <h2>Language</h2>
        <div className={styles.buttonGroup}>
          <button 
            className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            English
          </button>
          <button 
            className={`${styles.button} ${language === 'ko' ? styles.active : ''}`}
            onClick={() => handleLanguageChange('ko')}
          >
            Korean
          </button>
        </div>
      </div>
      
      <div className={styles.card}>
        <h2>Share</h2>
        <button 
          className={styles.button}
          onClick={handleShare}
        >
          Share
        </button>
      </div>
    </main>
  );
}
