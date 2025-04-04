"use client";

import styles from './page.module.css';
import { useState, useEffect, useCallback } from 'react';
import OneSignal from 'react-onesignal';

export default function Home() {
  const [language, setLanguage] = useState('en');
  const [isOneSignalReady, setIsOneSignalReady] = useState(false);

  // Initialize OneSignal
  useEffect(() => {
    if (typeof window === 'undefined') {
      return; // Don't run on server
    }

    console.log('[page.js] useEffect - Initializing OneSignal setup...');
    
    const initOneSignal = async () => {
      try {
        await OneSignal.init({
          appId: "b43abeb1-cee4-49fb-b380-316cf45ad44a",
          allowLocalhostAsSecureOrigin: true,
          notifyButton: { enable: false },
          promptOptions: { slidedown: { enabled: true } },
        });
        
        console.log('[page.js] OneSignal initialized successfully');
        
        // Ensure the global OneSignal object is available
        if (window.OneSignal) {
          console.log('[page.js] window.OneSignal is available');
        } else {
          console.error('[page.js] window.OneSignal is not available after initialization');
        }
        
        setIsOneSignalReady(true);
      } catch (error) {
        console.error('[page.js] OneSignal initialization error:', error);
      }
    };
    
    initOneSignal();
  }, []); // Runs once on mount

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

  // Handle language change
  const handleLanguageChange = useCallback((newLanguage) => {
    setLanguage(newLanguage);
    
    if (isOneSignalReady && window.OneSignal) {
      console.log(`[page.js] Attempting to set tag 'language': ${newLanguage}`);
      
      try {
        // Use a simpler approach without Promise chaining
        window.OneSignal.push(() => {
          console.log('[page.js] Inside OneSignal.push callback');
          
          try {
            // Try direct tag assignment without Promise
            if (window.OneSignal.User && typeof window.OneSignal.User.addTag === 'function') {
              console.log('[page.js] Calling User.addTag');
              window.OneSignal.User.addTag('language', newLanguage);
              console.log(`[page.js] OneSignal language tag set to: ${newLanguage}`);
            } 
            // Fallback to legacy tag method if available
            else if (typeof window.OneSignal.sendTag === 'function') {
              console.log('[page.js] Calling sendTag');
              window.OneSignal.sendTag('language', newLanguage);
              console.log(`[page.js] OneSignal language tag set to: ${newLanguage}`);
            }
            // Try any available tagging method
            else {
              console.log('[page.js] Available OneSignal methods:', Object.keys(window.OneSignal));
              
              // Last resort - try to set tags directly
              if (typeof window.OneSignal.setTags === 'function') {
                console.log('[page.js] Calling setTags');
                window.OneSignal.setTags({language: newLanguage});
                console.log(`[page.js] OneSignal language tag set to: ${newLanguage}`);
              } else {
                console.error('[page.js] No viable tag method found on OneSignal object');
              }
            }
          } catch (tagError) {
            console.error(`[page.js] Error setting tag:`, tagError);
          }
        });
      } catch (error) {
        console.error(`[page.js] Error with OneSignal push operation:`, error);
      }
    } else {
      console.warn(`[page.js] OneSignal not ready when trying to set language to ${newLanguage}. isReady: ${isOneSignalReady}, window.OneSignal: ${!!window.OneSignal}`);
    }

    // Send message to React Native if applicable
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'languageChange',
        data: { language: newLanguage }
      }));
    }
  }, [isOneSignalReady]); // Depend on the ready state



  
  return (
    <main className={styles.main}>
      <h1>Wooltari Web App</h1>
      
      <div className={styles.card}>
        <h2>Language</h2>
        <div className={styles.buttonGroup}>
          <button 
            id="lang-en"
            className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
            onClick={() => handleLanguageChange('en')}
            disabled={!isOneSignalReady} // Disable until SDK is confirmed ready
          >
            English
          </button>
          <button 
            id="lang-ko"
            className={`${styles.button} ${language === 'ko' ? styles.active : ''}`}
            onClick={() => handleLanguageChange('ko')}
            disabled={!isOneSignalReady} // Disable until SDK is confirmed ready
          >
            Korean
          </button>
        </div>
        {/* UI feedback based on the ready state */}
        {isOneSignalReady ? <p style={{fontSize: '0.8em', marginTop: '5px'}}>OneSignal Ready</p> : <p style={{fontSize: '0.8em', marginTop: '5px'}}>OneSignal Initializing...</p>}
      </div>
      
      <div className={styles.card}>
        <h2>Share</h2>
        <button 
          id="share-button"
          className={styles.button}
          onClick={handleShare}
        >
          Share
        </button>
      </div>
    </main>
  );
}
