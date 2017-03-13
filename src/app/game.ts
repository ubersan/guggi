import { User }     from './user';
import { Round }    from './round';

export class Game {
    id: number;
    name: string;
    players: User[];
    rounds: Round[];
}