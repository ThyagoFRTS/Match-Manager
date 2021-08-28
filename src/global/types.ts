import { NavigatorScreenParams } from "@react-navigation/core";

export type AuthParams = {
    Home: undefined,
    Singin: undefined,
}

export type GuildProps = {
    id: string;
    name: string;
    icon: null;
    owner: boolean;
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}