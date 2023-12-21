import { Component } from '@angular/core';
import { User } from '../user.model';  // Assurez-vous d'ajuster le chemin


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  //Bonus POO : créer une classe User qui te permet d'instancier ton objet user grâce au mot clef new depuis ton composant user-profile.
  user = new User('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg');

  hideAge = false;

  toggleAgeVisibility() {
    this.hideAge = !this.hideAge;
  }

    // Dans UserProfileComponent
  
  

}
