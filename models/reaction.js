const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'You need to provide a reaction!',
            maxlength: 280
        },
        username: {
            type: String,
            required: 'You need to provide a username!'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);