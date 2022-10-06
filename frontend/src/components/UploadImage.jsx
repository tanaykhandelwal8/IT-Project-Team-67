import axios from 'axios';
 
import React,{Component} from 'react';
 
class UploadImage extends Component {
  
    state = {
      selectedFile: null
    };
    
    onFileChange = event => {
      this.setState({ selectedFile: event.target.files[0] });
    };
    
    onFileUpload = () => {
      const formData = new FormData();
    
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      console.log(this.state.selectedFile);
    
      {/*axios.post("api/uploadfile", formData);*/}
    };
    
    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
          <div style={{marginBottom: "30vh"}}>
            <img id="resident_image" className="profile-img" src={this.state.selectedFile} alt="" />
          </div>
        );
      }
      else {
        return (
          <div>
              <br></br>
              <img id="default-profile-pic" className="profile-img" src={require('../assets/Portrait-Placeholder.png')} alt="" />
          </div>   
          );
      }
    };
    
    render() {
    
      return (
        <div>
            {this.fileData()}
            <div className="centered-box">
            <div style={{marginLeft: "5vw"}} className="Font">
                <input type="file" onChange={this.onFileChange} />
              </div>
                {/* Uncomment below when adding image to database */}
                {/*<button onClick={this.onFileUpload}>
                  <b>Upload Image</b>
                </button>*/}
            </div>
        </div>
      );
    }
  }
 
  export default UploadImage;