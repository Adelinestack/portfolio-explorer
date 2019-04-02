import React, { PureComponent } from 'react';
import Element from './Element';
import { getElement } from '../services/elements';
import { Nav, NavLink, ImgBlock, Path, Images } from '../stylized/contentStyle';

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
      <li>
        <NavLink key={path} href={path}>
          {name}
        </NavLink>
      </li>
    ));

    return (
      <div>
        <Nav>
          <ul>
            <li>
              <NavLink href="/">home</NavLink>
            </li>
            {foldersList}
          </ul>
        </Nav>
        <ImgBlock>
          <Path>
            <p>
              You are in : <span>{pathname}</span>
            </p>
          </Path>
          <Images>{imagesToDisplay}</Images>
        </ImgBlock>
      </div>
    );
  }
}
