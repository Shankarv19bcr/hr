if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/assets/hr/frontend/sw.js', { scope: '/assets/hr/frontend/' })})}