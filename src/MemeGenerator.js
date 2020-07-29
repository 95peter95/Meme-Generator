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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        const {name, value} = event.target
        this.setState( { [name]: value} )    
    }

    handleSubmit(event) {
        event.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMemeImg = this.state.allMemeImgs[randomNumber].url

        this.setState({randomImg: randomMemeImg})
    }

    render() {
        return (
           <div>
                
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
                <div className="container"> 
                <form className="meme-form" onSubmit={this.handleSubmit}>

                    <button>Generate</button>

                </form>
                </div>
           </div>
            

        );
    }
}

export default MemeGenerator;



