import React, { Component } from 'react'

export class AddProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
            tabType: "project"
    }
  }

  toggleMe = (value) =>{
      this.setState({
        tabType:value
      })
  }

  render() {
    return (
      <div>
        <div className="mt-3">
          <button className="btn btn-primary " onClick ={()=>this.toggleMe('Project 1')}>Project 1</button>
          <button className="btn btn-secondary " onClick ={()=>this.toggleMe('Project 2')}>Project 2</button>
          <button className="btn btn-warning mt-2" onClick ={()=>this.toggleMe('Project 3')}>Project 3</button>
          <button className="btn btn-info mt-2" onClick ={()=>this.toggleMe('Project 4')}>Project 4</button>
          <button className="btn btn-info mt-2" onClick ={()=>this.toggleMe('Project 5')}>Project 5</button>
        </div>
        <div>
          {
            this.state.tabType === 'Project 1' && <div>You're current viewing Project 1</div>
          }
          {
            this.state.tabType === 'Project 2' && <div>You're currently viewing Project 2</div>
          }
          {
            this.state.tabType === 'Project 3' && <div>You're currently viewing Project 3</div>
          }
          {
            this.state.tabType === 'Project 4' && <div>You're currently viewing Project 4</div>
          }
          {
            this.state.tabType === 'Project 5' && <div>You're currently viewing Project 5</div>
          }
        </div>
      </div>
    )
  }
}

export default AddProject