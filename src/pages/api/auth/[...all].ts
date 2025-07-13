
import { toNextJsHandler } from "better-auth/next-js"
import { auth } from "../../../lib/auth"

export default toNextJsHandler(auth)