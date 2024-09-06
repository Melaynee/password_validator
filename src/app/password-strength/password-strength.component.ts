import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css',
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: 'empty' | 'short' | 'easy' | 'medium' | 'strong' = 'empty';
  passwordVisability: 'password' | 'text' = 'password';

  constructor() {}

  setPasswordStrength(): void {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols =
      /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~`\_\-]/.test(
        this.password
      );

    if (this.password.length === 0) {
      this.strength = 'empty';
    } else if (this.password.length < 8) {
      this.strength = 'short';
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.strength = 'strong';
    } else if (
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols) ||
      (hasSymbols && hasLetters)
    ) {
      this.strength = 'medium';
    } else {
      this.strength = 'easy';
    }
  }

  getClass(bar: number): string {
    if (this.strength === 'empty') return '';
    else if (this.strength === 'short') {
      return 'red';
    } else if (this.strength === 'easy') {
      return bar === 1 ? 'red' : 'gray';
    } else if (this.strength === 'medium') {
      return bar < 3 ? 'yellow' : 'gray';
    } else if (this.strength === 'strong') {
      return 'green';
    }
    return 'gray';
  }

  preventSpace(e: KeyboardEvent) {
    e.code === 'Space' && e.preventDefault();
  }

  togglePassword(): void {
    if (this.passwordVisability === 'password')
      this.passwordVisability = 'text';
    else this.passwordVisability = 'password';
  }
}
