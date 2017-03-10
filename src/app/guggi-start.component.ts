import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'guggi-start',
    templateUrl: './guggi-start.component.html'
})
export class GuggiStartComponent {
    title = 'Starting page';

    players = ['Lena', 'Simi', 'Nüi', 'Fäde', 'Mäde'];
    descriptions = ['Jede Rose', 'Schilte König', 'Alle 9i'];

    curr_desc = 'Default description';

    hide_desc = true;

    done(): void {
        this.hide_desc = false;
    }
}