import { NavigatorScreenParams } from "@react-navigation/core";

export type AuthParams = {
    Home: undefined,
    AppointmentDetails: {guildSelected: AppointmentProps},
    AppointmentCreate: undefined,
}
//
export type UserProps = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;

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
    icon: string | null;
    owner: boolean;
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

