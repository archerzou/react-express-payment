const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_uEPNuQdKUvAXTVl66IAFCPq1004vLBthe8';
export default STRIPE_PUBLISHABLE;