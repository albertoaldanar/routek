/* eslint-disable react/no-array-index-key */
/* eslint-disable*/
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardBody, Col } from 'reactstrap';

const Sale = `${process.env.PUBLIC_URL}/img/for_store/catalog/sale_lable.png`;
const New = `${process.env.PUBLIC_URL}/img/for_store/catalog/new_lable.png`;

class ProjectList extends PureComponent {
  // static propTypes = {
  //   items: PropTypes.arrayOf(PropTypes.shape({
  //     src: PropTypes.string,
  //     title: PropTypes.string,
  //     price: PropTypes.string,
  //     description: PropTypes.string,
  //     colors: PropTypes.arrayOf(PropTypes.string),
  //     new: PropTypes.bool,
  //   })),
  // };

  // static defaultProps = {
  //   items: [],
  // };

  constructor(props){
    super(props);
    this.state = {image: true}
  }

  render() {
    const { items } = this.props;
    const widthLg = items.length == 1 ? 6 : 12;

    return (
      <Col md={12} lg={widthLg}>
        <div className="project-items__wrap">
          <div className="project-items">
            {items.map((item, i) => (
              <CardBody className="project-item" key={i}>
                <Link className="project-item__link" to="/e-commerce/product_page">
                  <div className="project-item__img-wrap">
                    <img className="project-item__img" src={item.src == "" ? 'https://image.flaticon.com/icons/svg/2864/2864919.svg': item.src} alt="project-item-img" />
                  </div>
                  <div className="project-item__info">
                    <h4 className="project-item__title">{item.title}</h4>
                    <p className="project-item__description">{item.description}</p>
                    {item.sale ? <p className="project-item__old-price">${item.oldPrice}</p> : ''}
                  </div>
                </Link>
              </CardBody>
            ))}
          </div>
        </div>
      </Col>
    );
  }
}

export default ProjectList;
