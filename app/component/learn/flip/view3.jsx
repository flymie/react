import React from 'react';
import style from './style.css';

const assign = Object.assign;
let domList = []; // 元素集合
const listItemObj = { // 渲染每条数据初始值
  left: 0,
  top: 0,
};

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      // 用于标记动画的状态
      animateStatus: -1, // -1：不让初始化出错;
      id: 2,
      listData: [
        {
          id: 1,
          left: 0,
          top: 0,
        },
        {
          id: 2,
          left: 0,
          top: 0,
        },
      ],
      oldListData: [],
    };
    this.listRef = React.createRef();
    this.updateItem = this.updateItem.bind(this);
  }


  componentDidUpdate() {
    this.updateAnimateStatus();
  }

  updateAnimateStatus() {
    const {
      animateStatus,
      listData,
      oldListData,
    } = this.state;
    if (animateStatus === 1) {
      domList = Array.prototype.slice.call(this.listRef.current.children);
      domList.forEach((v) => {
        const rectInfo = v.getBoundingClientRect(); // rectInfo,这是更新后的数据
        const id = +v.dataset.id;
        const listIndex = listData.findIndex(v2 => v2.id === id);
        if (listIndex !== -1) {
          const oldItem = oldListData.find(v2 => v2.id === id);
          listData[listIndex].left = (oldItem ? oldItem.left : 0) - rectInfo.left;
          listData[listIndex].top = (oldItem ? oldItem.top : 0) - rectInfo.top;
        }
      });
      this.setState(() => ({
        listData,
        animateStatus: 2,
      }));
    } else if (animateStatus === 2) {
      // Play
      // 重置
      requestAnimationFrame(() => {
        this.setState(() => ({
          animateStatus: 3,
        }));
      });
      // setTimeout(() => {
      //   this.setState(() => ({
      //     animateStatus: 3,
      //   }));
      // }, 0);
    }
  }

  /**
   * @param type： 增加, 删除
   * @param currentIndex：
   */
  updateItem(type, currentIndex) {
    const {
      listData,
      id,
    } = this.state;
    let listDataTemp = [];
    const oldListDataTemp = [];
    let idCount = id;
    // 在操作之前记录数据
    domList = Array.prototype.slice.call(this.listRef.current.children);
    domList.forEach((v) => {
      const rectInfo = v.getBoundingClientRect(); // rectInfo,这是更新前的数据
      const obj = assign({}, {
        left: rectInfo.left,
        top: rectInfo.top,
        id: +v.dataset.id,
      });
      oldListDataTemp.push(obj);
    });
    if (type === 'add') {
      listDataTemp = [...listData.slice(0, currentIndex), assign({}, listItemObj, {
        id: ++idCount,
      }), ...listData.slice(currentIndex)];
    } else {
      listDataTemp = [...listData.slice(0, currentIndex), ...listData.slice(currentIndex + 1)];
    }
    this.setState(() => ({
      id: idCount,
      listData: listDataTemp,
      oldListData: oldListDataTemp,
      animateStatus: 1,
    }));
  }

  render() {
    const {
      listData,
      animateStatus,
    } = this.state;
    return (
      <>
        <div className="update-count">
          <button onClick={() => this.updateItem('add', 0)}>增加</button>
        </div>
        <hr />
        <ul className="card-list" ref={this.listRef}>
          {
            listData.map((item, index) => (
              <li
                data-id={item.id}
                key={item.id}
                className={`card-item ${animateStatus === 3 ? ' active' : ''}`}
                style={
                  Object.assign({ zIndex: item.zIndex || 'auto' }, animateStatus === 2 && index !== 0
                    ? { transform: `translate(${item.left}px, ${item.top}px)` }
                    : null)
                }
              >
                <div className="card-title">
                  <h3>Title - {item.id}</h3>
                  <span onClick={this.updateItem.bind(this, 'del', index)} className="icon-btn" title="点击删除">Delete</span>
                </div>
                <div className="card-content">
                  <p className="content">content - {item.id}</p>
                  <p className="content">content - {item.id}</p>
                  <p className="content">content - {item.id}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}
