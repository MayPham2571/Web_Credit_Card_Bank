import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateAccount, FindOne } from '../account/modules';
import { AccountRepository, AdminRepository, UserRepository } from '../account/repositories/account.repository';
import { AccountService } from '../account/services/account.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Login, SignUp, SignUser } from './modules';
import { UserJwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports:[
  JwtModule.register({
      secret: "hcmiusebanking",
      signOptions: {expiresIn: '60s'}
    }),
    TypeOrmModule.forFeature([
      AccountRepository,
      UserRepository,
      AdminRepository]),
    AccountRepository
  ],
controllers: [AuthController],
  providers: [
    AuthService,
    AccountService,
    UserJwtStrategy, 
    Login,
    SignUp,
    SignUser,
    CreateAccount,
    FindOne]
})
export class AuthModule {}
