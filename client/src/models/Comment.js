

export class Comment {
    constructor(data) {
        this.id = data.id || data._id
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.body = data.body
        this.postId = data.postId
        this.likeCount = data.likeCount
    }
}