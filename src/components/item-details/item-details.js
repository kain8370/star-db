import React from 'react';

import itemDetailsStyle from './item-details.module.css';

class ItemDetails extends React.Component {

  state = {
    item: null,
    image: null
  }

  updateItem = () => {
    const id = this.props.id;
    if (!id) return;
    this.props.getData(id)
      .then(item => {
        this.setState({item, image: this.props.getImageUrl(item)})
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.updateItem();
    }
  }

  render() {
    if (!this.state.item) return null;
    const { name, id, birthYear, gender, eyeColor} = this.state.item;
    return (
       <div className="card text-white bg-primary mb-3" style={{maxHeight: 300, width: '100%', marginLeft: 30, display: 'flex', flexDirection: 'row'}}>
        <img src={this.state.image} alt={name} className={itemDetailsStyle.image} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          {React.Children.map(this.props.children, child => React.cloneElement(child, { item: this.state.item }))}
        </div>
      </div>
    );
  }
}

export default ItemDetails;