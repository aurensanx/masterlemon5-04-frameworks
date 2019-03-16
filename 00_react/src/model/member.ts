export interface MemberEntity {
    id: number;
    login: string;
    avatar_url: string;
}

export const createDefaultMemberEntity = () => ({
    id: -1,
    login: '',
    avatar_url: '',
});

export interface MemberDetailEntity {
    id: number;
    login: string;
    avatar_url: string;
    name: string;
    company: string;
    followers: number;
    following: number;
    created_at: Date;
}

export const createDefaultMemberDetailEntity: () => MemberDetailEntity = () => ({
    id: -1,
    login: '',
    avatar_url: '',
    name: '',
    company: '',
    followers: 0,
    following: 0,
    created_at: new Date(),
});
