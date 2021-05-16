import React from 'react';
import PersonDetails from '../person-details/person-details';
import ItemList from '../item-list/item-list';

import pageStyle from './page.module.css';

class Page extends React.Component {
  state = { selectedPerson: 1 }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  }

  render() {
    return (
      <div className={pageStyle.container}>
        <ItemList onPersonSelected={this.onPersonSelected} getData={this.props.getData} />
        <PersonDetails personId={this.state.selectedPerson} />
      </div>
    );
  }
}

export default Page;