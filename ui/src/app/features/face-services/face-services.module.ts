/*
 * Copyright (c) 2020 the original author or authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';

import { FaceRecognitionService } from '../../core/face-recognition/face-recognition.service';
import { DragNDropModule } from '../drag-n-drop/drag-n-drop.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { FaceRecognitionContainerComponent } from './face-recognition/face-recognition-container.component';
import { FaceVerificationContainerComponent } from './face-verification/face-verification-container.component';
import { RecognitionResultComponent } from './face-recognition/recognition-result/recognition-result.component';
import { VerificationResultComponent } from './face-verification/verification-result/verification-result.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    FaceRecognitionContainerComponent,
    FaceVerificationContainerComponent,
    RecognitionResultComponent,
    VerificationResultComponent,
  ],
  imports: [CommonModule, DragNDropModule, SpinnerModule, MatExpansionModule, TranslateModule, MatCardModule],
  providers: [FaceRecognitionService],
  exports: [FaceRecognitionContainerComponent, FaceVerificationContainerComponent],
})
export class FaceServicesModule {}
