import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { CONSTANTS } from '../.././constant';

@Injectable()
export class UserServices {
  public users: User[] = [
    {
      userName: 'subhra',
      password: bcrypt.hashSync('Subhra', 10),
      email: 'subhra@gmail.com',
      age: 25,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      userName: 'shikha',
      password: bcrypt.hashSync('shikha', 10),
      email: 'shikha@gmail.com',
      age: 22,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    },
    {
      userName: 'aman',
      password: bcrypt.hashSync('aman', 10),
      email: 'aman@gmail.com',
      age: 26,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    },
    {
      userName: 'shreya',
      password: bcrypt.hashSync('shreya', 10),
      email: 'shreya@gmail.com',
      age: 23,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      userName: 'gaurav',
      password: bcrypt.hashSync('gaurav', 10),
      email: 'gaurav@gmail.com',
      age: 25,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
  ];

  getUserByUserName(userName: string): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      const user = this.users.find((user) => user.userName === userName);
      console.log('user services', user);
      if (user) {
        resolve(user);
      } else {
        resolve(undefined);
      }
    });
  }
}
