import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../modules/user/user.service";

@Injectable()
export class MyAuthGuard implements CanActivate {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest()
            const { authorization } = context.switchToHttp().getRequest().headers
            const token = (authorization ?? '').split(' ')[1]
            const payload = this.jwtService.verify(token)
            const user = await this.userService.findOne(payload.sub)
            request['user'] = user
            return true
        } catch (error) {
            return false
        }
    }
}