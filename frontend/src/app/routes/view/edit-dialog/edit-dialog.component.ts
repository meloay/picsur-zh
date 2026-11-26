import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EImage } from 'picsur-shared/dist/entities/image.entity';
import { HasFailed } from 'picsur-shared/dist/types/failable';
import { ImageService } from '../../../services/api/image.service';
import { Logger } from '../../../services/logger/logger.service';
import { ErrorService } from '../../../util/error-manager/error.service';

export interface EditDialogData {
  image: EImage;
}

@Component({
  selector: 'edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent {
  private readonly logger = new Logger(EditDialogComponent.name);

  public readonly ExpireOptions: Array<[string, number]> = [
    ['永久', 0],
    ['5 分钟', 5 * 60],
    ['10 分钟', 10 * 60],
    ['30 分钟', 30 * 60],
    ['1 小时', 60 * 60],
    ['6 小时', 6 * 60 * 60],
    ['12 小时', 12 * 60 * 60],
    ['1 天', 24 * 60 * 60],
    ['1 周', 7 * 24 * 60 * 60],
    ['1 个月', 30 * 24 * 60 * 60],
  ];

  public expiresAfter?: number = undefined;
  public image: EImage;

  constructor(
    public readonly dialogRef: MatDialogRef<EditDialogComponent>,
    private readonly imageService: ImageService,
    private readonly errorService: ErrorService,
    @Inject(MAT_DIALOG_DATA) data: EditDialogData,
  ) {
    if (!data.image) {
      throw new Error('imageID is required');
    }

    this.image = data.image;
  }

  close() {
    this.dialogRef.close();
  }

  async save() {
    const result = await this.imageService.UpdateImage(this.image.id, {
      file_name: this.image.file_name,
      expires_at: this.getExpiresDate(),
    });

    if (HasFailed(result)) {
      this.errorService.showFailure(result, this.logger);
      return this.close();
    }

    this.errorService.success('图片已更新');

    this.dialogRef.close(result);
  }

  private getExpiresDate() {
    if (this.expiresAfter === undefined) return undefined;
    if (this.expiresAfter === 0) return null;
    return new Date(Date.now() + this.expiresAfter * 1000);
  }
}
