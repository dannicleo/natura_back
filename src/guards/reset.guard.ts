import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../modules/user/user.service";

@Injectable()
export class ResetGuard implements CanActivate {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest()
            const { userId, token, password } = request.body            
            const user = await this.userService.findOne(userId)
            // if(token != user.resetToken) return false
            request['user'] = user
            return true
        } catch (error) {
            return false
        }
    }
}