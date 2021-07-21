
import Users from "./Users"
import React from "react"
import Preloader from "../Common/Preloader";

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
    }

    render() {
        

        return (<div> {this.props.isFetching && <Preloader />}
            <Users {...this.props} changePage={this.changePage} />
        </div>
        )
    }
}
export default UsersClass