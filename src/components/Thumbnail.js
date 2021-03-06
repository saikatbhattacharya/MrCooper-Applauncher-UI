import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import style from '../css/style.css';
import editIcon from '../images/edit.png';

const Thumbnail = (props) => {
    const { appObject, editApp } = props;
    return (
        <div className="col-lg-2 col-md-4 col-xs-6 thumb">
            <ReactTooltip place="bottom" type="info" effect="solid" />
            <img className="editIcon" data-tip={"Edit App"} src={editIcon} alt="Edit" onClick={()=>{editApp(appObject)}} />
            <a className="thumbnail" data-tip={appObject.description} href={appObject.linkUrl} target="_blank">
                <img className="img-responsive" src={appObject.iconimage} alt="" />
                <p className="appName">{appObject.displayname}</p>
            </a>
        </div>
    );
};

Thumbnail.propTypes = {
  appObject: PropTypes.object.isRequired,
  editApp: PropTypes.func.isRequired
};

export default Thumbnail;