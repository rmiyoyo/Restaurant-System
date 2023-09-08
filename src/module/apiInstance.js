const createInstance = async () => {
  const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/');
  await fetch(request, {
    method: 'POST',
  });
};

export default createInstance;
