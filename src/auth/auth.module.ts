import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UsersService} from "../users/users.service";
import {JwtModule} from "@nestjs/jwt";
import {UsersModule} from "../users/users.module";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [forwardRef(() => UsersModule),
      JwtModule.register({
        secret: 'SECRET',
        signOptions: {
          expiresIn: '24h'
        }
      })
  ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}
