export const config = {
  isr: {
    expiration: 10,
  },
  runtime: 'nodejs18.x', // this is required
};

export const load = () => {
  return {
    ts: Date.now(),
  };
};
