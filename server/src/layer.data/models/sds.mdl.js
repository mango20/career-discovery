import mongoose from "mongoose";
import sdsEVO from "../../layer.domain/valueObj/sds.vo.js";

const SDSSchema = mongoose.Schema(sdsEVO, { timestamps: true });

const SDS = mongoose.model("SDS", SDSSchema);

export default SDS;
