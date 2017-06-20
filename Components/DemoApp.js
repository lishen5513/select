import React, { Component } from 'react'

class DemoApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <SelectedBlock
                    likedList={this.props.likedList}
                    onDeleteLikeItem={(item)=>{dispatch(action.deleteLikeItem(item))}}>
                </SelectedBlock>

                <SelectListBlock
                    selectList={this.props.selectList}
                    likedList={this.props.likedList}
                    onAddLikeItem={(index, item) =>{dispatch(action.addLikeItem(index, item))}}>
                </SelectListBlock>
            </div>
        )
    }
}
