
import Users from "./Users"
import { getUsers } from "../../api/api";
import React from "react"
import Preloader from "../Common/Preloader";

class UsersClass extends React.Component {

    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this)
    }
    componentDidMount() {

        if (this.props.users.length === 0) {
            this.props.setIsFetching(true)
            getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })

        }
    }
    changePage(pageNumber) {
        
        this.props.setIsFetching(true)
        this.props.setPage(pageNumber)
        
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        

        return (<div> {this.props.isFetching && <Preloader />}
            <Users {...this.props} changePage={this.changePage} />
        </div>
        )
    }
}
export default UsersClass