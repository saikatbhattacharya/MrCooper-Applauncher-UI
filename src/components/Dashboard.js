import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import axios from 'axios';
import Thumbnail from './Thumbnail';
import Header from './Header';
import NewAppModal from './NewApp';

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            applicationList: [],
            showModal: false,
            appCreationError: null
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.onNameChange=this.onNameChange.bind(this);
        this.onDescChange=this.onDescChange.bind(this);
        this.onUrlChange=this.onUrlChange.bind(this);
        this.onImageUrlChange=this.onImageUrlChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.editApp=this.editApp.bind(this);
    }
    componentWillMount(){
        axios.get('/getApp')
             .then((response) => {
                 this.setState({applicationList: response.data});
             })
             .catch((error) => {
                 console.log(error);
             })
    }
    toggleModal(){
        this.setState({
            showModal: !this.state.showModal,
            appCreationError: null
        })
    }
    onNameChange(event){
        this.setState({
            displayname: event.target.value,
            appCreationError: null
        });
    } 
    onDescChange(event){
        this.setState({
            description: event.target.value,
            appCreationError: null
        });
    }
    onUrlChange(event){
        this.setState({
            linkUrl: event.target.value,
            appCreationError: null
        });
    }
    onImageUrlChange(event){
        this.setState({
            iconimage: event.target.value,
            appCreationError: null
        });
    }
    onSubmit(){
        const { displayname, description, linkUrl, iconimage } = this.state;
        if (!(displayname && description && linkUrl && iconimage)){
            return this.setState({
                     appCreationError: "All Fields are mandatory"
                 })
        }
        if (this.state._id) {
            return axios.put('/editApp', {
            displayname, description, linkUrl, iconimage, _id: this.state._id
            })
             .then((response) => {
                 if(response.data.ok === 1){
                    const applicationList = this.state.applicationList;
                    applicationList.splice(applicationList.indexOf(_.filter(applicationList, {_id: this.state._id})[0]), 1, {displayname, description, linkUrl, iconimage, _id: this.state._id});
                    this.setState({
                        applicationList
                    });
                    this.toggleModal();
                 }
             })
             .catch((error) => {
                 this.setState({
                     appCreationError: "Something went wrong. Please try again."
                 })
             })
        }
        return axios.post('/createApp', {
            displayname, description, linkUrl, iconimage
        })
             .then((response) => {
                 this.setState({
                     applicationList: [].concat(this.state.applicationList, response.data)
                 });
                 this.toggleModal();
             })
             .catch((error) => {
                 this.setState({
                     appCreationError: "Something went wrong. Please try again."
                 })
             })
    }
    editApp(appInfo){
        const { displayname, description, linkUrl, iconimage, _id } = appInfo;
        this.setState({
            displayname, description, linkUrl, iconimage, _id
        });
        this.toggleModal();
    }
    render(){
       return (
        <div>
           <Header />
           <div className="row addApp">
             <Button bsStyle="primary" onClick={this.toggleModal}>+ Add</Button>
           </div>
           <div className="container">
                <div className="appBox" >
                        {
                            _.map(this.state.applicationList,(each, index) => {
                                return(<Thumbnail key={index.toString()}
                                    editApp={this.editApp}
                                    appObject = {each}                        
                                />);
                            })
                        }
                </div>
           </div>
           <NewAppModal
                showModal={this.state.showModal}
                toggleModal={this.toggleModal}
                onNameChange={this.onNameChange}
                onDescChange={this.onDescChange}
                onUrlChange={this.onUrlChange}
                onImageUrlChange={this.onImageUrlChange}
                onSubmit={this.onSubmit}
                appCreationError={this.state.appCreationError}
                displayname={this.state.displayname}
                description={this.state.description}
                linkUrl={this.state.linkUrl}
                iconimage={this.state.iconimage}
            />
        </div>
       );
    }
}

export default Dashboard;
