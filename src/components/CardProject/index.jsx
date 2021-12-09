import * as Styled from './styles';
import { Github } from '@styled-icons/boxicons-logos/Github';

export const CardProject = ({ project }) => {
  return (
    <Styled.Card>
      <img src={project.image} alt="" />
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <div className={project.public ? 'public actions' : 'actions'}>
        {project.public && (
          <>
            <a className="outline" href={project.link} target="_blank">
              <Github />
              <span>Repositório</span>
            </a>
            <a href={project.link} target="_blank">
              <span>Acessar Demo</span>
            </a>
          </>
        )}

        {!project.public && (
          <a href={project.link} target="_blank">
            <span>Visitar Website</span>
          </a>
        )}
      </div>
    </Styled.Card>
  );
};
