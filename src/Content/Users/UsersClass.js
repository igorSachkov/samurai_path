import * as axios from "axios"
import Users from "./Users"

import React from "react"
import Preloader from "../Common/Preloader";

class UsersClass extends React.Component {

    constructor(props) {
        super(props);

    }
    componentDidMount() {

        if (this.props.users.length === 0) {
            this.props.setIsFetching(true)
            let promise = axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            promise.then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })

        }
    }
    changePage(pageNumber) {
        this.props.setIsFetching(true)
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        return (<div> {this.props.isFetching && <Preloader />}
            <Users props={this.props} changePage={this.changePage} />
        </div>
        )
    }
}
export default UsersClass