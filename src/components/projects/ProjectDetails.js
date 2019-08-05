import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import nl2br from 'react-newline-to-break'
import PreviewPicture from './PreviewPicture';

const ProjectDetails = (props) => {
  const { project, auth } = props;
 // if (!auth.uid) return <Redirect to='/signin' /> 
  if (project) {
    const content = project.content;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            {content.split('*').map((item, i) => {
                return <p key={i}><br/>{item}</p>;
            })}
          </div>
          <div className="card-image"> <PreviewPicture imageUrl = {project.imageUrl}/> </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Written by {project.authorFirstName} {project.authorLastName}, {project.position}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading, please wait...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
