import { Routes } from '@angular/router';
import { User } from './user/user';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { TodoApp } from './todo-app/todo-app';
import { PageNotFound } from './page-not-found/page-not-found';
import { UserData } from './user-data/user-data';

export const routes: Routes = [
    {path:"user",component:User},
    {path:"login",component:Login},
    {path:"profile",component:Profile},
    {path:"/todo",component:TodoApp},
    {path:"userd/:id/:name",component:UserData},
    {path:"**",component:PageNotFound}
];
