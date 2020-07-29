import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state={
            topText:"",
            bottomText: "",
            randomImg: "https://i.ytimg.com/vi/Nws_Vc1fY5o/maxresdefault.jpg"    ,   
            allMemeImgs: []
        };
         
            }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
        const {memes} = response.data
        this.setState({allMemeImgs:memes})
            }) 
        }
        handleChange(event) {
            console.log("working")       
    }
    render() {
        return (
           <div>

                <form className="meme-form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    ></input>

                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    ></input>

                    <button>Generate</button>
                </form>

           </div>
        );
    }
}

export default MemeGenerator;



