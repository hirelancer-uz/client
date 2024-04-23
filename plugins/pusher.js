import Pusher from 'pusher-js';

export default ({ app }, inject) => {
  // Enable pusher logging - don't include this in production
  // Pusher.logToConsole = true;

  const pusher = new Pusher('9ad1ee722b9c4aeac800', {
    cluster: 'eu',
  });

  inject('pusher', pusher);
};
