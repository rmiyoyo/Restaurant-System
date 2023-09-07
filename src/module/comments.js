class InvolvementApiClient {
  constructor(statusElement) {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R35CzyDIJMb5HV6XSpZu/comments';
    this.statusMsg = document.querySelector(statusElement);
  }

  async postComment(itemId, username, comment, successMsgSelector) {
    const postData = {
      itemId,
      username,
      comment,
    };
    const successElement = document.querySelector(successMsgSelector);
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      successElement.classList.remove('hidden');
      if (response.status === 201) {
        successElement.textContent = 'Comment posted successfully!';
      } else if (!response.ok) {
        successElement.textContent = `Error: ${response.status} ${response.statusText}`;
      }
    } catch (networkError) {
      successElement.classList.remove('hidden');
      successElement.textContent = 'There was a network problem:';
    }

    setTimeout(() => {
      successElement.classList.add('hidden');
    }, 5000);
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

export default InvolvementApiClient;