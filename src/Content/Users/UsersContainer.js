import { connect } from "react-redux";
import Users from "./Users"
import React from "react"
import Preloader from "../Common/Preloader";
import {follow, unfollow, getUsersThunkCreator, setPage, followThunk, unfollowThunk} from "../../redux/usersReducer"
import  withAuthRedirect  from "../../HOC/withAuthRedirect";
import { compose } from "redux";


class UsersClass extends React.Component {

    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this)
    }
    componentDidMount() {
        if (this.props.users.length === 0)  {
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        }
    }
    changePage(pageNumber) {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
        this.props.setPage(pageNumber)
    }

    render() {
        

        return (<div> {this.props.isFetching && <Preloader />}
            <Users {...this.props} changePage={this.changePage} />
        </div>
        )
    }
}

let mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleIsFollowing: state.usersPage.toggleIsFollowing
    }
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, getUsersThunkCreator, setPage, followThunk, unfollowThunk
    }),
    withAuthRedirect
)(UsersClass)