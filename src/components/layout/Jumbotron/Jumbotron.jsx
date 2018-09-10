import React, { Component } from 'react';
import styled from "styled-components";
import cloudinary from "cloudinary-core";
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Button, Modal } from "@material-ui/core";

const JumboWrapper = styled.div`
  width: 100vw;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative
`;

const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 80vw;
`

const styles = {
  dropzone: {
    border: "2px solid white",
    background: "white",
    height: "100%",
    position: "absolute",
    width: "100%"
  },
  dropzoneInner: {
    height: "90%",
    width: "95%",
    border: "2px dashed blue",
    borderRadius: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}

const buttonStyles = {
  position: "absolute",
  bottom: "20px",
  right: "10px"
};

const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "dpopy5skj" });
const imageURL = cloudinaryCore.url("space_images/Campus-03");


class Jumbotron extends Component {
  state = {
    modalOpen: false,
    inProgress: false,
    completed: false
  };

  handleOpen = () => {
    this.setState({ modalOpen: true })
  }
  
  handleClose = () => {
    this.setState({ modalOpen: false })
  }

  handleDrop = async (files) => {
    this.setState({ inProgress: true });
    const uploaders = files.map( file => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `space-image, header`);
      formData.append("upload_preset", "vvsm55cv");
      formData.append("api_key", "678649652131923");
      formData.append("timestamp", (Date.now() / 1000) | 0);

      return axios.post('https://api.cloudinary.com/v1_1/dpopy5skj/image/upload', formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" }
      })
        .then(response => {
          const uploadData = response.data;
          const file_url = uploadData.url;
          console.log(file_url);
        })
        .catch(err => console.log(err.message));
    });

    await axios.all(uploaders);
    await console.log('Upload successful');
    this.setState({ inProgress: false, completed: true })
    this.handleClose();
  }

  render () {
    return (
      <JumboWrapper style={{ backgroundImage: `url(${imageURL})` }}>
        <Button variant="contained" color="primary" style={buttonStyles} onClick={this.handleOpen}>
          Change Image
        </Button>
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <ModalInner>
            <Dropzone
              onDrop={this.handleDrop}
              multiple={false}
              accept="image/*"
              style={styles.dropzone}
            >
              <div style={styles.dropzoneInner}>
                 <p>Drop your files or click here to upload</p>
              </div>
            </Dropzone>
          </ModalInner>

        </Modal>
      </JumboWrapper>
    );
  }
}

export default Jumbotron;