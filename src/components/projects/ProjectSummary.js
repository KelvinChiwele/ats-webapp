import React from 'react'
import moment from 'moment'
import PreviewPicture from './PreviewPicture';

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <div className="card-image"> <PreviewPicture imageUrl = {project.imageUrl}/> </div>
        <br/>
        <div className="card-action grey lighten-4 grey-text">
            <div>Written by {project.authorFirstName} {project.authorLastName}, {project.position}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
      </div>
    </div>
  )
}

export default ProjectSummary
