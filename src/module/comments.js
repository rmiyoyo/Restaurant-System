const getCurrentDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

class InvolvementApiClient {
  constructor(appId, statusElement) {
    this.appId = appId;
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.statusMsg = document.querySelector(statusElement);
  }

  async createComment(item_id, username, comment) {
    const commentUrl = `${this.baseUrl}apps/${this.appId}/comments/`;
    const currentDate = new Date();
    const date = currentDate;
    const commentData = {
      date, item_id, username, comment,
    };

    try {
      const response = await fetch(commentUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      this.statusMsg.classList.remove('hidden');

      if (response.status === 201) {
        this.statusMsg.textContent = 'Comment created successfully!';
      } else {
        this.statusMsg.textContent = `Failed to create a comment. Status code: ${response.status}`;
      }
    } catch (error) {
      this.statusMsg.textContent = 'Error creating a comment: " + error';
    }
    setTimeout(() => {
      this.statusMsg.classList.add('hidden');
    }, 3000);

    await this.fetchComments();
  }

  async fetchComments() {
    const commentsUrl = `${this.baseUrl}apps/${this.appId}/comments`;
    let comments = null;

    try {
      const response = await fetch(commentsUrl);
      comments = await response.json();
    } catch (error) {
      this.statusMsg.classList.remove('hidden');
      this.statusMsg.textContent = `Failed to fetch comments: ${error}`;
      setTimeout(() => {
        this.statusMsg.classList.add('hidden');
      }, 3000);
    }

    return comments;
  }

  async createLike(item_id) {
    const likeUrl = `${this.baseUrl}apps/${this.appId}/likes/`;
    const likeData = { item_id };

    try {
      const response = await fetch(likeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(likeData),
      });

      if (response.status === 201) {
        console.log('Like created successfully!');
      } else {
        console.error(`Failed to create a like. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error creating a like: ${error}`);
    }
  }

  async fetchLikes() {
    const likesUrl = `${this.baseUrl}apps/${this.appId}/likes/`;

    try {
      const response = await fetch(likesUrl);
      const likes = await response.json();

      console.log('Likes:');
      likes.forEach((like) => {
        console.log(`Item ID: ${like.item_id}, Likes: ${like.likes}`);
      });
    } catch (error) {
      console.error(`Failed to fetch likes: ${error}`);
    }
  }
}

/* const appId = 'abc234';
const apiClient = new InvolvementApiClient(appId);

(async () => {
  await apiClient.createComment('item1', 'Jane', 'Hello');
  await apiClient.fetchComments('item1');

  await apiClient.createLike('item1');
  await apiClient.fetchLikes();

  await apiClient.createReservation('item1', 'Jane', '2023-09-15', '2023-09-16');
  await apiClient.fetchReservations('item1');
})(); */

export default InvolvementApiClient;