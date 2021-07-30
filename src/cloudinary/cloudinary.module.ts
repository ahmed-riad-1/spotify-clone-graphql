import { Module } from '@nestjs/common';

import { cloudinaryProvider } from './cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';

@Module({
    providers: [cloudinaryProvider, CloudinaryService],
    exports: [CloudinaryService],
})
export class CloudinaryModule {}
