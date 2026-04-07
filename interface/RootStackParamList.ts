import { Cafe } from "./Cafe";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: {
    Cafe: Cafe
    imgUrl: string;
  };
};