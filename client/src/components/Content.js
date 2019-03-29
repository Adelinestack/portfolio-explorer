import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Element from './Element';
import { getElement } from '../services/elements';

export default class Content extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      allImages: [],
      folders: [],
    };
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    this.fetchElement(pathname);
  }

  componentDidUpdate({ location: { pathname: prevPathname } }) {
    const { pathname } = this.props.location;
    if (pathname !== prevPathname) {
      this.fetchElement(pathname);
    }
  }

  async fetchElement(elementPath) {
    const {
      data: { folders, allImages },
    } = await getElement(elementPath);
    this.setState({
      allImages,
      folders,
    });
  }

  render() {
    const { allImages, folders } = this.state;
    const { pathname } = this.props.location;
    const imagesToDisplay = allImages.map(({ path, name }) => (
      <Element path={path} name={name} key={`${name}${Date.now()}`} />
    ));
    const foldersList = folders.map(({ path, name }) => (
      <p>
        <Link key={path} to={path}>
          {name}
        </Link>
      </p>
    ));

    return (
      <div>
        <p>
          You are in : <span>{pathname}</span>
        </p>
        <nav>
          <p>
            <Link to="/">home</Link>
          </p>
          {foldersList}
        </nav>
        <div>{imagesToDisplay}</div>
      </div>
    );
  }
}
