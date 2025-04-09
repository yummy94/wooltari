"use client";

import styles from './page.module.css';
import { useState, useEffect, useCallback } from 'react';
import { initNativeBridge } from './utils/nativeBridge';

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [bridgeInitialized, setBridgeInitialized] = useState(false);

  // Initialize bridge to communicate with React Native
  useEffect(() => {
    try {
      const bridge = initNativeBridge();
      setBridgeInitialized(true);
    } catch (error) {
      console.error('[DEBUG] Error initializing bridge:', error);
    }
    
    console.log('[DEBUG] window.ReactNativeWebView exists:', !!window.ReactNativeWebView);
  }, []);

  // Handle sharing
  const handleShare = () => {
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'share',
        data: { url: window.location.href, title: 'Wooltari App' }
      }));
    } else if (navigator.share) {
      navigator.share({
        title: 'Wooltari App',
        url: window.location.href,
      }).catch(err => console.error('Error sharing:', err));
    } else {
      alert('Share feature not supported on this browser');
    }
  };

  // Handle registration for push notifications
  const handleRegister = () => {
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'register',
        data: { language }
      }));
    } else {
      alert('Registration only supported in the mobile app');
    }
  };

  // Handle language change
  const handleLanguageChange = useCallback((newLanguage) => {
    setLanguage(newLanguage);
    
    // Send message to React Native if applicable
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'languageChange',
        data: { language: newLanguage }
      }));
    }
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {language === 'en' ? 'Wooltari Web' : '울타리 웹'}
        </h1>
        
        <div className={styles.languageButtons}>
          <button 
            className={`${styles.button} ${language === 'en' ? styles.activeButton : ''}`} 
            onClick={() => handleLanguageChange('en')}
          >
            English
          </button>
          <button 
            className={`${styles.button} ${language === 'ko' ? styles.activeButton : ''}`} 
            onClick={() => handleLanguageChange('ko')}
          >
            Korean
          </button>
        </div>
        
        <button 
          className={styles.shareButton} 
          onClick={handleShare}
        >
          {language === 'en' ? 'Share' : '공유'}
        </button>
        
        <button 
          className={styles.shareButton} 
          onClick={handleRegister}
        >
          {language === 'en' ? 'Register for Notifications' : '알림 등록'}
        </button>
      </div>
    </main>
  );
}
