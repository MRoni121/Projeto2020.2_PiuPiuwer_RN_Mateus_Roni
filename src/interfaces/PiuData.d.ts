import User from "./User";

interface PiuData {
    favoritado_por: Array<User>;
    likers: Array<User>;
    usuario: User;
    texto: string;
    horario: string;
    id: number;
}

export default PiuData;