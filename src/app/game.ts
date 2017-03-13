import { User }     from './user';
import { Round }    from './round';

export class Game {
    name: string;
    players: User[];
    rounds: Round[];
}