import React from 'react';
import Proptypes from 'prop-types';
import style from './style.css';

/**
 * @param list 待处理的数据
 * @param result 处理后的数据
 * @param matrix 记录
 * @param matrixKey 拼接key
 * @param i 从0开始循环。
 * @param obj 迭代部分。
 * @returns {Array}
 */
function flatFn(tableArr, list, result = [], oldMatrix = {}, newMatrix = {}, matrixKey = 'WX', i = 0, obj = {}) {
  for (let j = 0, len = list[i].value.length; j < len; j++) {
    const val = list[i].value[j]; // 判断是否选择。
    const matrixKeyTemp = `${matrixKey}${j}`; // 拼接key值。
    if (i < list.length - 1) {
      if (val !== undefined) {
        obj[list[i].attributeId] = list[i].value[j];
        flatFn(tableArr, list, result, oldMatrix, newMatrix, matrixKeyTemp, i + 1, obj);
      }
    } else if (val !== undefined) {
      let temp;
      if (oldMatrix[matrixKeyTemp]) { // 之前存在，取之前的数据，比如交互增加了数据。
        temp = tableArr.find(v => v[matrixKeyTemp]);
      } else { // 表示此条信息是新增的
        temp = Object.assign({}, obj);
        temp[list[i].attributeId] = val;
      }
      temp[matrixKeyTemp] = true;
      newMatrix[matrixKeyTemp] = true;
      result.push(temp);
    }
  }
  // console.log(result)
  return {
    tableArr: result,
    matrix: newMatrix,
  };
}

const goodsList = [
  {
    attributeId: '1001',
    value: ['大陆版', '港版', '台版'],
    type: '型号',
  },
  {
    attributeId: '1002',
    value: ['红', '绿', '蓝'],
    type: '颜色',
  },
  {
    attributeId: '1003',
    value: ['64G', '32G', '16G'],
    type: '内存',
  },
  {
    attributeId: '1004',
    value: ['64寸', '32寸', '16寸'],
    type: '尺寸',
  },
];

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableArr: [],
      renderList: goodsList.map(v => Object.assign({}, v, { value: [] })), // 存储goodsList选中的信息。
      sortList: goodsList.map(v => v.attributeId),
      matrix: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeItem = this.changeItem.bind(this);
  }

  handleChange(ind, value, ind2) {
    const {
      renderList,
      matrix,
      tableArr,
    } = this.state;
    const obj = renderList[ind];
    const index = obj.value.indexOf(value);
    if (index === -1) {
      obj.value[ind2] = value;
    } else {
      obj.value[ind2] = undefined;
    }
    const result = flatFn(
      tableArr,
      renderList,
      [],
      matrix,
    );
    this.setState({
      renderList,
      tableArr: result.tableArr,
      matrix: result.matrix,
    });
  }

  changeItem(ind, key, val) {
    this.setState((state) => {
      const arr = state.tableArr;
      arr[ind][key] = val;
      return { tableArr: arr };
    });
  }

  render() {
    const {
      tableArr,
      sortList,
      renderList,
    } = this.state;
    return (
      <React.Fragment>
        <h1>全排列（笛卡尔积）</h1>
        {
          goodsList.map((v, ind) => (
            <React.Fragment key={v.type}>
              <div>{v.type}</div>
              {
                v.value.map((v2, ind2) => (
                  <label key={v2}>
                    {v2}
                    <input
                      type="CheckBox"
                      value={v2}
                      checked={renderList[ind].value.includes(v2)}
                      onChange={() => {
                        this.handleChange(ind, v2, ind2);
                      }}
                    />
                  </label>
                ))
              }
            </React.Fragment>
          ))
        }
        <div>
          <p>渲染table</p>
          <table>
            <tbody>
            {
              tableArr.map((v, ind) => (
                <tr key={`${ind + 1}`}>
                  {
                    sortList.map((v2, ind2) => (
                      <td key={`${ind2 + 1}`}>{v[v2]}</td>
                    ))
                  }
                  <td>
                    <input
                      type="text"
                      value={v.amount || ''}
                      onChange={(e) => {
                        this.changeItem(ind, 'amount', e.target.value);
                      }}
                    />
                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}


View.propTypes = {
};

export default View;
