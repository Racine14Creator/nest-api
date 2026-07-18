import { Body, Controller, Get, Param, Query, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers(@Query('name') name: string) {
    const users = [
      { id: 1, name: 'grace', age: 29 },
      { id: 2, name: 'Diane', age: 24 },
    ];

    if (name) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    return users;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id, name: 'Grace' };
  }

  @Post()
  createUser(@Body() body: any) {
    return { message: 'User created' };
  }
}
