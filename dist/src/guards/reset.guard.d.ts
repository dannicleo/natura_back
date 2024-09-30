import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../modules/user/user.service";
export declare class ResetGuard implements CanActivate {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
