import * as React from 'react';
import {Link} from "react-router-dom";
import {memberAPI} from "../../api/memberAPI";
import {createDefaultMemberDetailEntity, MemberDetailEntity} from "../../model/member";

interface Props {
    match: any;
}

interface State {
    member: MemberDetailEntity;
}

export class MemberDetailComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {member: createDefaultMemberDetailEntity()};
    }

    componentDidMount() {
        memberAPI.getMember(this.props.match.params.username).then(member =>
            this.setState({member})
        ).catch(() => this.setState({member: createDefaultMemberDetailEntity()}));
    }

    public render() {
        return (
            <div>
                <Link to="/">Go back to table</Link>
                <h2>{this.state.member.name}</h2>

                <img src={this.state.member.avatar_url} style={{ maxWidth: '10rem' }} />
                <div>Followers: {this.state.member.followers}</div>
                <div>Following: {this.state.member.following}</div>
            </div>
        );
    }
}


