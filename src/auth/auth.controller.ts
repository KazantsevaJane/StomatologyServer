import {Body, Controller, Post} from '@nestjs/common';
import {LoginUserDto} from "./dto/login-user.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }
    @Post('/login')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto)
    }
}
