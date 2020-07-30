import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state={
            topText:"",
            bottomText: "",
            randomImg: "https://i.ytimg.com/vi/Nws_Vc1fY5o/maxresdefault.jpg"    ,   
            allMemeImgs: [],
            deltaPosition: {
                x: 0, y: 0
              },
              controlledPosition: {
                x: -400, y: 200
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
            y: y + ui.deltaY,
          }
        });
      };

      adjustXPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {x, y} = this.state.controlledPosition;
        this.setState({controlledPosition: {x: x - 10, y}});
      };
    
      adjustYPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {controlledPosition} = this.state;
        const {x, y} = controlledPosition;
        this.setState({controlledPosition: {x, y: y - 10}});
      };
    
      onControlledDrag = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
      };
    
      onControlledDragStop = (e, position) => {
        this.onControlledDrag(e, position);
        this.onStop();
      };

    render() {

    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;

        return (
           <div>
                
                <div className="meme">
                <Draggable {...dragHandlers}>
                <div className="box">I can be dragged anywhere</div>
                </Draggable>
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



