import { NavigatorScreenParams } from "@react-navigation/core";

export type AuthParams = {
    Home: undefined,
    Singin: undefined,
    AppointmentDetails: undefined,
    AppointmentCreate: undefined,
}

export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

export type GuildProps = {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}