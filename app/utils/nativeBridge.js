/**
 * Native Bridge - For WebView Communication
 * Simplified version without OneSignal
 */

// Check if we're running inside a WebView
const isInWebView = () => {
  const inWebView = window.ReactNativeWebView !== undefined;
  console.log('[WebDebug] Running in WebView:', inWebView);
  return inWebView;
};

// Send a message to the native app
const sendToNative = (type, data) => {
  console.log('[WebDebug] Attempting to send message to native:', { type, data });
  
  if (isInWebView()) {
    console.log('[WebDebug] WebView detected, sending message');
    try {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type, data }));
      console.log('[WebDebug] Message sent successfully');
      return true;
    } catch (error) {
      console.error('[WebDebug] Error sending message:', error);
      return false;
    }
  }
  
  console.log('[WebDebug] Not in WebView, message not sent');
  return false;
};

// Set up language change handling
const setupLanguageChangeHandlers = () => {
  console.log('[WebDebug] Setting up language change handlers');
  
  // Listen for language change confirmations from native
  window.addEventListener('languageChangeConfirmed', (event) => {
    console.log('[WebDebug] Language change confirmed by native:', event.detail);
  });
  
  // Listen for bridge ready event
  window.addEventListener('nativeBridgeReady', (event) => {
    console.log('[WebDebug] Native bridge is ready:', event.detail);
  });
};

// Change language function
const changeLanguage = (language) => {
  console.log('[WebDebug] changeLanguage called with:', language);
  return sendToNative('languageChange', { language });
};

// Initialize bridge
const initNativeBridge = () => {
  console.log('[WebDebug] Initializing native bridge');
  
  // Only run client-side
  if (typeof window === 'undefined') {
    console.log('[WebDebug] Not in browser environment, skipping initialization');
    return;
  }
  
  setupLanguageChangeHandlers();
  
  console.log('[WebDebug] Bridge initialization complete');
  return {
    isInWebView,
    sendToNative,
    changeLanguage
  };
};

export {
  isInWebView,
  sendToNative,
  changeLanguage,
  initNativeBridge
}; 