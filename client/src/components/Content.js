import React, { PureComponent } from 'react';
import Element from './Element';
import axios from 'axios';

export const getElementFromServer = async elementPath =>
  await axios.get(`/images`, {
    params: {
      elementPath,
    },
  });
export const getElement = async elementPath => {
  const content = await getElementFromServer(elementPath);
  return content;
};

export default class Content extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      elementsList: [],
    };
  }

  componentDidMount() {
    this.fetchElement(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.fetchElement(this.props.location.pathname);
    }
  }

  async fetchElement(elementPath) {
    const { data: elementsList } = await getElement(elementPath);
    this.setState({
      elementsList,
    });
  }

  render() {
    const { elementsList } = this.state;
    const { pathname } = this.props.location;
    const displayElements = elementsList.map(element => {
      if (element.isDir === true) {
        return (
          <Element
            path={pathname}
            name={`${element.name}/`}
            type={'Folder'}
            key={`${element.name}${Date.now()}`}
          />
        );
      } else if (element.content) {
        return <div>{element.content}</div>;
      } else
        return (
          <Element
            path={pathname}
            name={element.name}
            type={'Image'}
            key={`${element.name}${Date.now()}`}
          />
        );
    });
    return (
      <div>
        <p>
          You are in : <span>{pathname}</span>
        </p>
        <div>{displayElements}</div>
      </div>
    );
  }
}
