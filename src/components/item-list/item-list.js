import React from 'react';
import Spinner from '../spinner/spinner';

import itemListStyle from './item-list.module.css';

class ItemList extends React.Component {
  state = {
    itemList: null
  }

  componentDidMount() {
    this.props.getData()
      .then(itemList => this.setState({ itemList }))
  }

  renderItems(items) {
    return items.map(item => {
      return (
        <a href="#" className="list-group-item list-group-item-action" key={item.id} onClick={() => this.props.onItemSelected(item.id)}>{this.props.renderItem(item)}</a>
      )
    })
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }
    const items = this.renderItems(itemList);
    return (
      <div className="list-group" style={{ maxWidth: '30rem', width: '100%'}}>
        {items}
      </div>
    );
  }
}
export default ItemList;