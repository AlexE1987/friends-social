import * as axios from 'axios';
import React from 'react';
import Users from "./Users";
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC} from '../../redux/users-reducer';
// import spinner from '../../assets/Spinner-1s-200px (1).gif';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsfetching(true)
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        )
        .then((response) => {
          this.props.toggleIsfetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsfetching(true);
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        )
        .then((response) => {
          this.props.toggleIsfetching(false)
          this.props.setUsers(response.data.items);
        });
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
      />
    </>

  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleIsfetching: (isFethcing) => {
      dispatch(toggleIsFetchingAC(isFethcing))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
