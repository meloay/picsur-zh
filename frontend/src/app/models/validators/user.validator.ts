import { ValidationErrors, Validators } from '@angular/forms';
import { errorsToError } from './util.validator';

// Match this with user entity in shared lib
// (Security is not handled here, this is only for the user)

export const UsernameValidators = [
  Validators.minLength(4),
  Validators.maxLength(32),
  Validators.pattern('^[a-zA-Z0-9]+$'),
];

export const CreateUsernameError = (
  errors: ValidationErrors | null,
): string => {
  const error = errorsToError(errors);
  switch (error) {
    case 'required':
      return '请输入用户名';
    case 'minlength':
      return '用户名太短';
    case 'maxlength':
      return '用户名太长';
    case 'pattern':
      return '用户名只能包含字母和数字';
    case 'unavailable':
      return '用户名已被使用';
    default:
      return '用户名无效';
  }
};

export const PasswordValidators = [
  Validators.minLength(4),
  Validators.maxLength(1024),
];

export const CreatePasswordError = (
  errors: ValidationErrors | null,
): string => {
  const error = errorsToError(errors);
  switch (error) {
    case 'required':
      return '请输入密码';
    case 'minlength':
      return '密码太短';
    case 'maxlength':
      return '密码太长';
    case 'compare':
      return '两次输入的密码不一致';
    default:
      return '密码无效';
  }
};
