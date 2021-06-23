// 加一
// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const bigNum = digits.join('');
  const len = bigNum.length;
  // 进位
  let f = 0;
  // 单次相加
  let singleNum = 0;
  // 字符串拼接和
  let sum = '';

  for (let i = len - 1; i >= 0; i--) {
    if (i === len - 1) {
      singleNum = parseInt(bigNum[i]) + 1 + f;
    } else {
      singleNum = parseInt(bigNum[i]) + 0 + f
    };
    f = Math.floor(singleNum / 10);
    sum = singleNum % 10 + sum;
  };

  if (f !== 0) {
    sum = '1' + sum;
  }
  return sum.split('')
};

// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};

