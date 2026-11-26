import { ValidationErrors, Validators } from '@angular/forms';
import { errorsToError } from './util.validator';

export const RoleNameValidators = [
  Validators.minLength(4),
  Validators.maxLength(32),
  Validators.pattern('^[a-zA-Z0-9]+$'),
];

export const CreateRoleNameError = (
  errors: ValidationErrors | null,
): string => {
  const error = errorsToError(errors);
  switch (error) {
    case 'required':
      return '请输入角色名称';
    case 'minlength':
      return '角色名称太短';
    case 'maxlength':
      return '角色名称太长';
    case 'pattern':
      return '角色名称只能包含字母和数字';
    default:
      return '角色名称无效';
  }
};
