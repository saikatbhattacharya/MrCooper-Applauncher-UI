import React from 'react';
import { connect } from 'react-redux';
import style from '../css/style.css';
import store from '../store';
import Header from './header';
import { comingSoon } from '../API/index';
import _ from 'lodash';


class comingsoon extends React.Component {

    componentWillMount = () => {
        comingSoon();
    }

    render = () => {
        let dataArray = [];
        let temp = [];
        let columnLength = 0;
        if(this.props.cs_data) columnLength = Math.ceil(this.props.cs_data.length / 5);
        _.map(this.props.cs_data, (each, index) => {
            if ((index + 1) % columnLength === 0) {
                dataArray.push(temp);
                temp = [];
            }
            else {
                temp.push(each);
            }
        })
        return (
            <div>
                <Header
                    inTheatreClass={"filter toggle"}
                    comingSoonClass={"filter toggle active"}
                    />
                {
                    _.map(dataArray, (eachDataArray) => {
                        return (<div id="maingrid" class="grid" data-component="PrimaryGrid" data-preferred-column-width="250" data-item-selector=".pin">
                            <div className="column" style={{ 'width': "20%" }}>
                                {
                                    _.map(eachDataArray, (eachData) => {

                                        return (
                                            <a href='#' className="pin" sl- processed="1" >
                                                <div className="poster">
                                                    <img src={eachData.poster_url} />
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-9 details">
                                                        <h4>{eachData.name}</h4>
                                                        <span className="supplement">{eachData.release_date}&nbsp;●&nbsp;{eachData.language}</span>
                                                    </div>
                                                </div>
                                                <p className="synopsis">{eachData.short_synopsis}</p>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>)


                    })
                }
            </div>
        )
    }
}

let mapStateToProps = (store) => {
    return {
        cs_data: store.formState.cs_data
    };
};


export default connect(mapStateToProps)(comingsoon);
