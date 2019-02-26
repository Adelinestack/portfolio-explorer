import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Element extends PureComponent {
  render() {
    const { path, name, type } = this.props;
    const element =
      type === 'Folder' ? (
        <li>
          <Link to={`${path}${name}`}>
            <p type={type}>
              {type} : {name}
            </p>
          </Link>
        </li>
      ) : (
        <li>
          <img src={`${path}${name}`} alt={name} />
        </li>
      );

    return element;
  }
}
