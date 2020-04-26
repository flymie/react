import React from 'react';
import style from './style.css';

let activeList = null;

// 生成初始测试数据
const listDataFn = cardIndex => Array(cardIndex).fill().map((item, index) => ({
  index,
}));
// 填充数组
function getArrByLen(len) {
  return Array(len).fill().map(() => ({
    top: 0,
    left: 0,
  }));
}

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      // 用于标记动画的状态
      animateStatus: -1, // -1：不让初始化出错； 1：
      cardIndex: 2, // 初始化
      listData: listDataFn(2),
      inputValue: 0,
      activeIndex: 999999,
    };
    this.listRef = React.createRef();
    this.updateItem = this.updateItem.bind(this);
  }


  componentDidUpdate() {
    // card 更新
    this.updateAnimateStatus();
  }

  updateAnimateStatus() {
    const {
      animateStatus,
      listData,
      updateStatus, // 0标识增加，1标识删除
      transArr,
      activeIndex,
      cardIndex,
    } = this.state;
    if (animateStatus === 1) { // 获取translate移动偏量，前者减去后者，通过偏移恢复到之前的状态
      // Last + Invert
      const stepIndex = updateStatus === 0 ? 1 : 0;
      activeList.forEach((itemEle, index) => {
        const rectInfo = itemEle.getBoundingClientRect(); // rectInfo,这是更新后的数据
        transArr[index + stepIndex].left -= rectInfo.left;
        transArr[index + stepIndex].top -= rectInfo.top;
        // 横排的层级变化，则进行 z-index的提升以获得更好的视觉体验
        if (transArr[index + stepIndex].top !== 0) {
          let zIndex = cardIndex;
          listData.some((v, k) => {
            if (index + stepIndex + activeIndex === k) {
              v.zIndex = zIndex++;
              return true;
            }
            return false;
          });
        }
      });
      this.setState(() => ({
        animateStatus: 2,
        transArr,
      }));
    } else if (animateStatus === 2) {
      // Play
      // 重置
      setTimeout(() => {
        this.setState(() => ({
          animateStatus: 3,
          transArr: getArrByLen(listData.length),
        }));
      }, 0);
    }
  }

  /**
   * @param type：0 增加，1 删除
   * @param currentIndex：
   */
  updateItem(type, currentIndex) {
    const {
      listData,
      cardIndex,
    } = this.state;
    activeList = Array.prototype.slice.call(this.listRef.current.children).slice(currentIndex + (type === 0 ? 0 : 1))
    // 如果是增加操作，则 transArr2的长度应该比 activeList 多 1
    const stepIndex = type === 0 ? 1 : 0;
    const transArr2 = getArrByLen(activeList.length + stepIndex);
    // First
    activeList.forEach((itemEle, index) => {
      const rectInfo = itemEle.getBoundingClientRect(); // rectInfo,这是更新前的数据
      transArr2[index + stepIndex].left = rectInfo.left;
      transArr2[index + stepIndex].top = rectInfo.top;
    });
    let newListData = [];
    if (type === 0) {
      newListData = listData.slice(0, currentIndex).concat({
        index: cardIndex,
      }, listData.slice(currentIndex));
    } else {
      newListData = listData.filter((value, index) => index !== currentIndex);
    }
    this.setState({
      updateStatus: type,
      animateStatus: 1,
      listData: newListData,
      activeIndex: currentIndex,
      transArr: transArr2,
      cardIndex: cardIndex + 1,
    });
  }

  render() {
    const {
      transArr,
      listData,
      animateStatus,
      activeIndex,
    } = this.state;
    console.log(listData);
    return (
      <>
        <div className="update-count">
          <button onClick={() => this.updateItem(0, 0)}>增加</button>
        </div>
        <hr />
        <ul className="card-list" ref={this.listRef}>
          {
            listData.map((item, index) => (
              <li
                key={item.index}
                className={`card-item${animateStatus === 3 ? ' active' : ''}`}
                style={
                  Object.assign({ zIndex: item.zIndex || 'auto' }, index >= activeIndex && animateStatus > 1
                    ? { transform: `translate(${transArr[index - activeIndex].left}px, ${transArr[index - activeIndex].top}px)` }
                    : null)
                }
              >
                <div className="card-title">
                  <h3>Title - {item.index}</h3>
                  <span onClick={this.updateItem.bind(this, 1, index)} className="icon-btn" title="点击删除">Delete</span>
                </div>
                <div className="card-content">
                  <p className="content">content - {item.index}</p>
                  <p className="content">content - {item.index}</p>
                  <p className="content">content - {item.index}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}
