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

    selectors = ['Der/Das', 'Jede', 'Alle'];
    curr_selector = '';

    colors = ['Rose', 'Eichel', 'Schilte', 'Schelle'];
    curr_color = '';

    cards = ['6', '7', '8', '9', 'Banner', 'Under', 'Ober', 'König', 'Ass'];
    curr_card = '';

    curr_cost = '';

    temp_descs: string[] = [];

    done(): void {
        this.temp_descs.push(this.curr_selector + ' ' + this.curr_color + ' ' + this.curr_card + ' kostet ' + this.curr_cost + ' CHF');
        this.curr_selector = '';
        this.curr_color = '';
        this.curr_card = '';
        this.curr_cost = '';
    }
}