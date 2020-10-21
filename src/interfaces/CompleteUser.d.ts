import PiuData from "./PiuData";
import SimplifiedUser from "./SimplifiedUser";
import User from "./User";

interface CompleteUser extends User {
    seguidores: Array<SimplifiedUser>;
    seguindo: Array<SimplifiedUser>;
    favoritos: Array<PiuData>;
    pius: Array<PiuData>;
}

export default CompleteUser;