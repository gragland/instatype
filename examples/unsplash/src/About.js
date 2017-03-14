import React from 'react';
import Helmet from "react-helmet";
import { Link } from 'react-router';
import GitHubButton from 'react-github-button';

class About extends React.PureComponent {

  constructor(props){
    super(props);
  }

  render(){

    const projects = [
      {
        name: 'Instatype',
        repo: 'instatype',
        description: 'Mobile-friendly React autocomplete component. Used for searching Unsplash users.'
      },
      {
        name: 'React Simple Grid',
        repo: 'react-simple-grid',
        description: 'Display content within a grid of evenly spaced blocks. Features include: ability to hide outer spacing, responsive breakpoints, HOC allowing child components to recieve block width as a prop.'
      },
      {
        name: 'React Perfect Image',
        repo: 'react-perfect-image',
        description: 'Ensures that images take up a desired aspect ratio before the image has finished loading (no page reflow). Also allows us to dynamically change the image source url at different container widths. In conjuction with the React Simple Grid HOC we can ensure we\'re never loading images at a higher resolution than needed.'
      },
      {
        name: 'React Scroll Loader',
        repo: 'react-scroll-loader',
        description: 'Efficient infinite scroll component used to load more images once we\'ve reached the bottom of the page.'
      },
      {
        name: 'React Component Data',
        repo: 'react-component-data',
        description: 'Async data fetching logic is specified in the component, resolved automagically on server-render, and then passed to the component as props. No more duplication of data fetching logic between client and server.'
      }
    ];

    return(
      <div style={{ marginTop: '3em', textAlign: 'center' }}>
        <Helmet title="About" />
        
        <div style={{ maxWidth: '700px', padding: '0 2em', margin: '2em auto 0 auto',  }}>

          <div style={{ marginBottom: '2em' }}>
            <span style={{ fontSize: '6em' }}>👋</span>
          </div>

          <div style={{ padding: '0 2em', fontSize: '1.6em', lineHeight: '1.5em', marginBottom: '2em' }}>
            This is a simple demo app that displays images from <a target="_blank" href="https://unsplash.com">Unsplash</a> and uses the following React components built by <a href="https://github.com/gragland" target="_blank">Gabe Ragland</a>.
          </div>

          {projects.map((project, i) => (
            <div style={{ 
              position: 'relative', 
              textAlign: 'left', 
              fontSize: '1.4em', 
              borderBottom: '1px solid #e8e8e8', 
              padding: '2em 0 2em 0'}}
              key={i}>

              <div style={{fontWeight: 'bold' }}>
                <a target="blank" href={`https://github.com/gragland/${project.repo}`}>
                  {project.name}
                </a>
              </div>
              <div style={{ marginTop: '0.8em' }}>
                {project.description}
              </div>

              {/*
              <div style={{ clear: 'both', position: 'absolute', top: '2em', right: '0em' }}>
                <GitHubButton type="stargazers" size="default" namespace="gragland" repo={project.repo} />
              </div>
              */}
              
            </div>
          ))}
        </div>
      
        <Link to={`/`} style={{ display: 'block', margin: '1.5em 0', fontSize: '3em', textDecoration: 'none' }}>
          🏠
        </Link>
    
      </div>
    )
  }
};

export default About;
