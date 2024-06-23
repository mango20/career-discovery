import mongoose from "mongoose";
import authVO from "../../layer.domain/valueObj/auth.vo.js";

const AuthSchema = mongoose.Schema(authVO, { timestamps: true });

const Auth = mongoose.model("Auth", AuthSchema);

export default Auth;
