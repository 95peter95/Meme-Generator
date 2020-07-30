import React, { Component } from 'react';
import Draggable from 'react-draggable';

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state={
            topText:"koko",
            bottomText: "",
            randomImg: "https://i.ytimg.com/vi/Nws_Vc1fY5o/maxresdefault.jpg"    ,   
            allMemeImgs: [],
            deltaPosition: {
                x: 0, y: 0
              }
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDrag = this.handleDrag.bind(this)
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

    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY
          }
        });
      };

    render() {

    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return (
           <div>
                
                <div className="meme">
                <Draggable {...dragHandlers}>
                <div className="box">joz</div>
                </Draggable>
                    <img src={this.state.randomImg} alt="" />
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



