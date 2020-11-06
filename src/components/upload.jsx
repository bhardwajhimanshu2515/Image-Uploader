import React,{useState} from "react";
import "./upload.css";

function Upload(){
    const [loading,setLoading]=useState(false);
    const [image,setImage]=useState("");
    const uploadImage= async e =>{
        const files=e.target.files;
        const data=new FormData();
        data.append('file',files[0]);
        data.append('upload_preset','himanshuImages');
        setLoading(true);

        const res=await fetch('https://api.cloudinary.com/v1_1/dse1vv6sd/image/upload',
        {
            method:'POST',
            body:data
        })

        const file=await res.json()

        console.log(file);
        setImage(file.secure_url);
        setLoading(false);
    }
    return(
        <div id="upload">
            <h1>Upload Images</h1>
            <input type="file" name="file" placeholder="Upload an Image" onChange={uploadImage}></input>
            {
                loading?(
                <h3>Loading..............</h3>
                )
                :(
                    <img src={image} style={{width:'300px'}}/>
                )
            }
        </div>
    );
}

export default Upload;