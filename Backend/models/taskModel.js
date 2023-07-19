import { model, Schema } from "mongoose";

const model = new Schema({
    name: {
        required: true,
        type: String
    }
});

const Item = mongoose.model('Item', model);

export default Item;