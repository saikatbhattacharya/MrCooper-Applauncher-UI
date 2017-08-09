import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FieldGroup from './FieldGroup';

const AppForm = (props) => {
    const { onNameChange, onDescChange, onUrlChange, onImageUrlChange, displayname, description, linkUrl, iconimage } = props;
    return (
        <form>
            <FieldGroup
                id="formControlsText"
                type="text"
                label="App Name"
                placeholder="Enter App Name"
                value={displayname}
                onChange={onNameChange}
            />
            <FieldGroup
                id="formControlsText"
                type="text"
                label="App Description"
                placeholder="Enter Description"
                value={description}
                onChange={onDescChange}
            />
            <FieldGroup
                id="formControlsText"
                type="text"
                label="App URL"
                placeholder="Enter URL"
                value={linkUrl}
                onChange={onUrlChange}
            />
            <FieldGroup
                id="formControlsText"
                type="text"
                label="App Icon"
                placeholder="Enter URL for Icon"
                value={iconimage}
                onChange={onImageUrlChange}
            />
            {/* <FieldGroup
                id="formControlsFile"
                type="file"
                label="File"
                help="Please Select the icon file"
            />*/}
        </form>
    );
};

AppForm.propTypes = {
    onNameChange: PropTypes.func.isRequired,
    onDescChange: PropTypes.func.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    onImageUrlChange: PropTypes.func.isRequired,
    displayname: PropTypes.string,
    description: PropTypes.string,
    linkUrl: PropTypes.string,
    iconimage: PropTypes.string
};

export default AppForm;
