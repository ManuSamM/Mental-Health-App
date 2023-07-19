import { model, Schema } from "mongoose";

const item = new Schema({
    name: {
        required: true,
        type: String
    }
});

const Item = model('Item', item);

export default Item;