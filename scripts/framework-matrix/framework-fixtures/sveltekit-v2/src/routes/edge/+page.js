export const config = {
  runtime: 'edge',
};

export const load = () => {
  return {
    ts: Date.now(),
  };
};
