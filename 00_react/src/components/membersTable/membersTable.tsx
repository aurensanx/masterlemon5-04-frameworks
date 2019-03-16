import * as React from 'react';
import {MemberEntity} from '../../model/member';
import {memberAPI} from '../../api/memberAPI';
import {MemberRow} from './memberRow';
import {Pagination} from "./pagination";


interface Props {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
    members: Array<MemberEntity>,
    organizationName: string,
    page: number,
    itemsPerPage: number,
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        // set initial state
        this.state = {members: [], organizationName: 'lemoncode', page: 1, itemsPerPage: 3};
    }

    loadMembers = () => {
        memberAPI.getAllMembers(this.state.organizationName, this.state.page, this.state.itemsPerPage).then(members =>
            this.setState({members: members})
        ).catch(() => this.setState({members: []}));
    }

    onOrganizationNameChange = e => {
        this.setState({...this.state, organizationName: e.target.value});
    }

    onPageChange = page => {
        this.setState({...this.state, page});
    }

    componentDidUpdate(prevProps, prevState:State) {
        if (prevState.page !== this.state.page) {
            this.loadMembers();
        }
    }

    public render() {

        return (
            <div className="row">
                <h2> Members Page</h2>
                <input onChange={this.onOrganizationNameChange}/>
                <button onClick={() => this.loadMembers()}>Load</button>
                {
                    this.state.members.map((member: MemberEntity) =>
                        <MemberRow key={member.id} member={member}/>
                    )
                }
                <Pagination onPageChange={page => this.onPageChange(page)} page={this.state.page}></Pagination>
            </div>
        );
    }
}
