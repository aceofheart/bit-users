import React, { Component } from 'react';
import './App.css';
import { Header } from "./partials/header";
import { UserList } from "./users/UserList";
import { userService } from '../service/UserService';
import { Search } from "./partials/search";
import { Loader } from "./users/Loader";





export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            searchedUsers: [],
            listView: localStorage.getItem('listView') === "true",
            load:true,
            searchValue: ""
        }
    }

    componentDidMount() {
        this.loadUsers()    
    }

    loadUsers = () => {
        userService.getData()
            .then(myUsers => {
                console.log(myUsers);
                
                this.setState({ users: myUsers })
                this.setState({load :false})
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    changeView = (event) => {
        event.preventDefault();

        const newViewState = !this.state.listView;
        localStorage.setItem('listView', newViewState);

        this.setState({ listView: newViewState });
    }

    onChangeInputValue = (event) => {
       this.setState({
           searchValue: event.target.value
       }, () => {
           this.searchUsers();
       })
    }

    searchUsers = () => {
        const searchTerm = this.state.searchValue;
        const users = [...this.state.users];

        const filteredUsers = users.filter(user => {
            return user.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
        })

        this.setState({
            searchedUsers: filteredUsers
        })
    }

    renderUsers = () => {
        return this.state.searchedUsers.length ? this.state.searchedUsers : this.state.users
    }

    render() {
        return (
            <div>
                 <Header onChangeViewClick={this.changeView} 
                        stateView={this.state.listView} 
                        onRefresh={this.loadUsers} />
                <Search searchValue={this.state.searchValue}
                        onChangeInputValue={this.onChangeInputValue} />
                <div className="container">
                    <div className="row">
                    { this.state.load ? <Loader/>: <UserList users={this.renderUsers()} listView={this.state.listView} />
                        
                    }
                    </div>
                </div>
                
            </div>
        )
    }
}
export default App;
