class InvolvementApiClient {
  constructor(statusElement) {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vqYSKyH5yQaDwOFM69A0/comments';
    this.statusMsg = document.querySelector(statusElement);
  }

  async postComment(id, username, comment, successMsgSelector) {
    const url = `${this.url}?item_id=${id}`;
    let success = false;
    const postData = {
      item_id: id,
      username,
      comment,
    };
    let message = '';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (response.status === 201) {
        message = 'Comment posted successfully!';
        success = true;
      } else if (!response.ok) {
        message = `Error: ${response.status} ${response.statusText}`;
      }
    } catch (networkError) {
      message = 'There was a network problem:';
    }

    const successElement = document.querySelector(successMsgSelector);

    if (successElement) {
      successElement.textContent = message;
      successElement.classList.remove('hidden');
      setTimeout(() => {
        successElement.classList.add('hidden');
      }, 5000);
    }

    return success;
  }

  async fetchComments(itemId, successMsgSelector) {
    const url = `${this.url}?item_id=${itemId}`;
    const successElement = document.querySelector(successMsgSelector);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        if (successElement) {
          successElement.classList.remove('hidden');
          successElement.textContent = 'Error fetching data';
        }
        throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (successElement) {
        successElement.classList.remove('hidden');
        successElement.textContent = 'There was a problem fetching data';
      }
    }

    setTimeout(() => {
      if (successElement) successElement.classList.add('hidden');
    }, 5000);
    return null;
  }
}

const extractEntries = (data, entryName) => Object.keys(data)
  .filter((key) => key.startsWith(entryName) && data[key])
  .map((key) => data[key]);

export { InvolvementApiClient, extractEntries };