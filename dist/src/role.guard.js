"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
class RoleGuard {
    constructor(role) {
        this.rolePass = role;
    }
    canActivate(context) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        return this.rolePass === request.user.role;
    }
}
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map