// import React, {Component} from 'react'




// class Comments extends Component{
//     constructor(){
//         super()
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     handleSubmit(event) {
//         event.preventDefault() // prevent default behavior of refreshing page upon form submission
//         const comment = event.target.elements.comment.value
//         this.props.addComment(comment)
//     }

//     render(){
//        return  <div className="comment">
//             <form className="comment-form" onSubmit ={this.handleSubmit}>
//                 <input type="text" placeholder="comment" name="comment"/>
//                 <input type="Submit" hidden/>
//             </form>
//         </div>
//     }
// }

// export default Comments