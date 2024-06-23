import mongoose from "mongoose";
import exampleVO from "../../layer.domain/valueObj/example.vo.js";

const ExampleSchema = mongoose.Schema(exampleVO, { timestamps: true });

const Example = mongoose.model("Product", ExampleSchema);

export default Example;
