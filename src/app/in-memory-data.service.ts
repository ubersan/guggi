import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = [
            {id: 1, name: "Lena"},
            {id: 2, name: "Fabi"},
            {id: 3, name: "Simi"},
            {id: 4, name: "Nüi"}
        ];

        let games = [
            {
                name: "a craazy game!",
                players: users,
                rounds:
                [
                    {
                        info: "test info",
                        costs: [1, 3, 4, ]
                    }
                ] 
            }
        ]

        return { users, games };
    }
}