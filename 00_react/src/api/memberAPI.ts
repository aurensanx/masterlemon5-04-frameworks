import {
    createDefaultMemberDetailEntity, createDefaultMemberEntity, MemberDetailEntity,
    MemberEntity
} from '../model/member';

class MemberAPI {

    getAllMembers(organizationName: string, page: number, itemsPerPage: number): Promise<MemberEntity[]> {

        const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members?page=${page}&per_page=${itemsPerPage}`;

        return fetch(gitHubMembersUrl)
            .then((response) => this.checkStatus(response))
            .then((response) => this.parseJSON(response))
            .then((data) => this.resolveMembers(data))
    }

    getMember(username: string): Promise<MemberDetailEntity> {

        const gitHubMemberUrl: string = `https://api.github.com/users/${username}`;

        return fetch(gitHubMemberUrl)
            .then((response) => this.checkStatus(response))
            .then((response) => this.parseJSON(response))
            .then((data) => this.resolveMember(data))
    }


    private checkStatus(response: Response): Promise<Response> {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            let error = new Error(response.statusText);
            throw error;
        }
    }

    private parseJSON(response: Response): any {
        return response.json();
    }

    private resolveMembers(data: any): Promise<MemberEntity[]> {

        const members = data.map((gitHubMember) => {
            var member: MemberEntity = createDefaultMemberEntity();

            member.id = gitHubMember.id;
            member.login = gitHubMember.login;
            member.avatar_url = gitHubMember.avatar_url;

            return member;
        });


        return Promise.resolve(members);
    }

    private resolveMember(data: any): Promise<MemberDetailEntity> {

        const member = createDefaultMemberDetailEntity();
        member.id = data.id;
        member.login = data.login;
        member.avatar_url = data.avatar_url;
        member.name = data.name;
        member.company = data.company;
        member.followers = data.followers;
        member.following = data.following;
        member.created_at = new Date(data.created_at);

        return Promise.resolve(member);
    }
}

export const memberAPI = new MemberAPI();
