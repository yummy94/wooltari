'use client'

import { useState, useEffect } from 'react';
import { sendToNative, isInWebView } from '../utils/nativeBridge';

export default function LanguageButton() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [changeProcessing, setChangeProcessing] = useState(false);
  
  // Available languages
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'es', label: 'Español' }
  ];
  
  // Get next language in rotation
  const getNextLanguage = () => {
    const currentIndex = languages.findIndex(lang => lang.code === currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    return languages[nextIndex].code;
  };
  
  // Change language handler
  const handleLanguageChange = () => {
    if (changeProcessing) return;
    
    setChangeProcessing(true);
    const newLanguage = getNextLanguage();
    
    // Send to native if in WebView
    if (isInWebView()) {
      sendToNative('languageChange', { language: newLanguage });
      console.log('Language change request sent to native app:', newLanguage);
    } else {
      // If not in WebView, change it directly
      setCurrentLanguage(newLanguage);
      setChangeProcessing(false);
    }
  };
  
  // Listen for language change confirmation from native app
  useEffect(() => {
    const handleConfirmation = (event) => {
      console.log('Language change confirmed:', event.detail);
      setCurrentLanguage(event.detail.language);
      setChangeProcessing(false);
    };
    
    window.addEventListener('languageChangeConfirmed', handleConfirmation);
    
    return () => {
      window.removeEventListener('languageChangeConfirmed', handleConfirmation);
    };
  }, []);
  
  // Get current language label
  const getCurrentLanguageLabel = () => {
    const lang = languages.find(l => l.code === currentLanguage);
    return lang ? lang.label : 'English';
  };
  
  return (
    <button 
      onClick={handleLanguageChange}
      disabled={changeProcessing}
      style={{
        padding: '8px 16px',
        backgroundColor: changeProcessing ? '#ccc' : '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: changeProcessing ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s'
      }}
    >
      {changeProcessing ? 'Changing...' : getCurrentLanguageLabel()}
    </button>
  );
} 