import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/Character.interface';

@Component({
    selector: 'character-form-component',
    templateUrl: './character-form.component.html'
})
export class CharacterFormComponent {
        
    name = signal('');
    power = signal(0);

    characterAdded = output<Character>();
       
    formAddCharacter() {
        console.log('onclick');
        const newCharacter: Character = {
            id: Math.floor(Math.random() * 1000),
            name: this.name(),
            power: this.power()
        }
        console.log('onclick emit');
        this.characterAdded.emit(newCharacter);     
    }
}
