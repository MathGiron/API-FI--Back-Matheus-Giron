import { UserMGController } from "./controller/UserMGController"
import { SistemaMGController } from "./controller/UserMGController";


export const Routes = [
  {
    method: "get",
    route: "/SistemaMG",
    controller: SistemaMGController,
    action: "all",
  },
  {
    method: "get",
    route: "/SistemaMG/:id",
    controller: SistemaMGController,
    action: "one",
  },
  {
    method: "post",
    route: "/SistemaMG",
    controller: SistemaMGController,
    action: "save",
  },
  {
    method: "put",
    route: "/SistemaMG/:id",
    controller: SistemaMGController,
    action: "update",
  },

  {
    method: "delete",
    route: "/SistemaMG/:Nome",
    controller: SistemaMGController,
    action: "remove",
  },
  {
    method: "get",
    route: "/UserMG",
    controller: UserMGController,
    action: "all",
  },
  {
    method: "get",
    route: "/UserMG/:cod",
    controller: UserMGController,
    action: "one",
  },

  {
    method: "put",
    route: "/UserMG/:cod",
    controller: UserMGController,
    action: "update",
  },
  {
    method: "post",
    route: "/UserMG",
    controller: UserMGController,
    action: "save",
  },
  {
    method: "delete",
    route: "/UserMG/:Nome",
    controller: UserMGController,
    action: "remove",
  },
    {
    method: "get",
    route: "/userMG",
    controller: UserMGController,
    action: "all"
}, {
    method: "get",
    route: "/userMG/:id",
    controller: UserMGController,
    action: "one"
}, {
    method: "post",
    route: "/userMG",
    controller: UserMGController,
    action: "save"
}, {
    method: "delete",
    route: "/userMG/:id",
    controller: UserMGController,
    action: "remove"
}]