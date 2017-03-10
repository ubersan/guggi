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

    curr_desc:string = '';
    curr_text:string = '';

    temp_descs: string[] = [];

    done(): void {
        this.temp_descs.push(this.curr_text + this.curr_desc);
        this.curr_desc = '';
    }
}