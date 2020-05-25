/* eslint-disable */
import React, {Component} from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
// import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { RTLProps } from '../../../shared/prop-types/ReducerProps';
import ProjectList from "./components/projectList";
import projectsFake from "./components/projectsFake";
import PropTypes from 'prop-types';
import UserAddIcon from 'mdi-react/UserAddIcon';

class Projects extends Component {

  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);
    this.state = {
      projects: 1
    }
  }

  showProjects(){
    const { projects } = this.state;
    const {t} = this.props;
    if(projects > 0) {
      return(
        <div>
          <Row>
            <ProjectList items={projectsFake}/>
          </Row>
        </div>
      );
    }

    return(
      <Row>
        <img src="https://image.flaticon.com/icons/svg/2864/2864919.svg" height={300} width={300} alt="" />
        <p className="dashboard__no-teams">{t('projects.no_projects_yet')}</p>
      </Row>
    )
  }
  render(){
    const { t } = this.props;

    return(
      <Container className="dashboard">
        <Row>
          <Col md={12} className="dashboard__title-and-button">
            <h3 className="page-title">Gestión de proyectos</h3>
            <Button color="success" className="dashboard__add-team icon">
              <UserAddIcon /> {t('projects.add_project')}
            </Button>
          </Col>
        </Row>
          {this.showProjects()}
      </Container>
    );
  }
}


// Projects.propTypes = {
//   // t: PropTypes.func.isRequired,
//   rtl: RTLProps.isRequired,
// };

export default compose(withTranslation('common'), connect(state => ({
  rtl: state.rtl,
})))(Projects);
