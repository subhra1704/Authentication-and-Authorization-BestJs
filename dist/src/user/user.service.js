"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const constant_1 = require("../.././constant");
let UserServices = class UserServices {
    constructor() {
        this.users = [
            {
                userName: 'subhra',
                password: bcrypt.hashSync('Subhra', 10),
                email: 'subhra@gmail.com',
                age: 25,
                role: constant_1.CONSTANTS.ROLES.ANDROID_DEVELOPER,
            },
            {
                userName: 'shikha',
                password: bcrypt.hashSync('shikha', 10),
                email: 'shikha@gmail.com',
                age: 22,
                role: constant_1.CONSTANTS.ROLES.WEB_DEVELOPER,
            },
            {
                userName: 'aman',
                password: bcrypt.hashSync('aman', 10),
                email: 'aman@gmail.com',
                age: 26,
                role: constant_1.CONSTANTS.ROLES.WEB_DEVELOPER,
            },
            {
                userName: 'shreya',
                password: bcrypt.hashSync('shreya', 10),
                email: 'shreya@gmail.com',
                age: 23,
                role: constant_1.CONSTANTS.ROLES.ANDROID_DEVELOPER,
            },
            {
                userName: 'gaurav',
                password: bcrypt.hashSync('gaurav', 10),
                email: 'gaurav@gmail.com',
                age: 25,
                role: constant_1.CONSTANTS.ROLES.ANDROID_DEVELOPER,
            },
        ];
    }
    getUserByUserName(userName) {
        return new Promise((resolve, reject) => {
            const user = this.users.find((user) => user.userName === userName);
            console.log('user services', user);
            if (user) {
                resolve(user);
            }
            else {
                resolve(undefined);
            }
        });
    }
};
exports.UserServices = UserServices;
exports.UserServices = UserServices = __decorate([
    (0, common_1.Injectable)()
], UserServices);
//# sourceMappingURL=user.service.js.map