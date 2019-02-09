import React, { Component,Fragment } from 'react';
import axios from 'axios'

class Story extends Component {

    state = {
        storyInfo: null,
        expanded: false,
        score: null,


    }

    expand = () => {
        
        this.setState({expanded: !this.state.expanded} )
    }

  
    addScore = () => {
      
        this.setState({score: this.state.score +1})
    }
    
    componentDidMount() {
            this.setState({ 
            storyInfo: this.props.story,
            score:this.props.story.score})
       
    }

  render() {
      const {storyInfo,score, expanded} = this.state
     const {expand} = this
     const width =  expanded ? 40 : 20 
     const background =  expanded ? '#fbbd08' : '#0000000d' 
      const   fillerText =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    return (
        <div className="ui card" id="card"  style={{width: width+ 'rem', background: background}}>
        {storyInfo && 
         <div className="content">
         
            <div className="header">{storyInfo.title}</div>
             <div className="meta">By: {storyInfo.by}</div>
             <div className="description" onClick={expand}>
                { expanded ? fillerText : <Fragment><p >{fillerText.slice(0,100)}...Read more</p></Fragment>}
                </div>
            <div className="score"> <i onClick={this.addScore} className="thumbs up outline icon"></i><p className="info"> {score}</p></div>
        </div>    
    }
    </div>   




    )
  }
}

export default Story