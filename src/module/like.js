// like.js
export const oneLike = async (uniqueID) => {
  const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AyieX5e6xBkjrE1kOdfK/likes/');
  await fetch(request, {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      item_id: uniqueID,
    }),
  });
};

export const fetchInfo = async () => {
  const request = new Request('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AyieX5e6xBkjrE1kOdfK/likes/');
  const response = await fetch(request);
  const data = await response.json();
  return data;
};

export const showInfo = async (metricsInfo, metricID) => {
  metricsInfo.forEach((element) => {
    if (element.item_id === metricID) {
      const likeUnique = metricID.replace('M', 'L');
      const span = document.querySelector(`#${likeUnique}`);
      span.textContent = `${element.likes} likes`;
    }
  });
};
