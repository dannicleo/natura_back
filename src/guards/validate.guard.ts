import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../modules/user/user.service";

@Injectable()
export class ValidateEmailGuard implements CanActivate {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest()
            const token = request.url.split('/').reverse()[0]
            const payload = this.jwtService.verify(token)
            const user = await this.userService.findOne(payload.userId)
            // if(user.role == 'USER' && user.email_validated) return false
            request['user'] = user
            return true
        } catch (error) {
            return false
        }
    }
}