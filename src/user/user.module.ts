import { Module } from '@nestjs/common';
import { UserServices } from './user.service'; 

@Module({
  imports: [],
  controllers: [],
  providers: [UserServices],
  exports: [UserServices],
})
export class UserModule {}
